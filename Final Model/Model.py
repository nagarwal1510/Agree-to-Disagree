import torch
from transformers import AutoModel , AutoTokenizer , pipeline
from bs4 import BeautifulSoup
import unicodedata


def remove_html_tags(text):
    return BeautifulSoup(text, 'html.parser').get_text()

def remove_accented_chars(text):
    new_text = unicodedata.normalize('NFKD', text).encode('ascii', 'ignore').decode('utf-8', 'ignore')
    return new_text

def preprocessing(data):
    
    tokenizer = AutoTokenizer.from_pretrained('sentence-transformers/bert-base-nli-mean-tokens')
    model = AutoModel.from_pretrained('sentence-transformers/bert-base-nli-mean-tokens')
    summarizer = pipeline("summarization", model="t5-base", tokenizer="t5-base", framework="pt")
    var = []
    for x in data:


        x = remove_html_tags(x)
        x = remove_accented_chars(x)
        var.append(x)
        if len(x.split()) > 400:

            var.append(summarizer(x, max_length=100, min_length=5, do_sample=False)[0]['summary_text'])

        elif len(x.split()) > 200:
            var.append(summarizer(x, max_length=70, min_length=5, do_sample=False)[0]['summary_text'])
        
        elif len(x.split()) > 100:
            var.append(summarizer(x, max_length=60, min_length=5, do_sample=False)[0]['summary_text'])
    
        elif len(x.split()) > 75:
            var.append(summarizer(x, max_length=50, min_length=5, do_sample=False)[0]['summary_text'])
        
        else :
            var.append(summarizer(x, max_length=40, min_length=5, do_sample=False)[0]['summary_text'])
    
      
    
    encoded_input = tokenizer(var, padding=True, truncation=True, return_tensors='pt')
  
    with torch.no_grad():
        model_output = model(**encoded_input)

    bert_embeddings = model_output[0]
    
    clss = []

    for x in bert_embeddings:
        clss.append(x[0])
    clss = torch.stack(clss)
    return clss

  
def generate_score(preds):
    good = 0
    bad = 0
    neutral = 0
    blocker = 0

    for c in preds :

        if c == 0:
            good +=1
 
        elif c == 1:
            neutral +=1
 
        elif c == 2:
            bad +=1
 
        elif c == 3:
            blocker +=1

    score = good - bad - 3*blocker

    grade = ""
    if score < -10:
        grade = "E"

    elif score > -10 and blocker > 0 :
        grade = "D"

    elif score > -10 and score < -4 and blocker ==0 :
        grade = "C"

    elif score > -4 and blocker == 0 and bad > 0 :
        grade = "B"

    else :
        grade = "A"

    return (score,grade,good,neutral,bad,blocker)