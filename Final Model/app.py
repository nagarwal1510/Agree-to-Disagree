from flask import Flask, jsonify, request, render_template
import pickle

import joblib 
 
import warnings
warnings.filterwarnings('ignore')

from Model import *

# load model
if __name__=='__main__':
    # with open('model12.pkl', 'rb') as f:
    #     mod = pickle.load(f)
    # mod = pickle.load(open('modelnew.pkl', 'rb'))
   
    neigh = joblib.load('filename.pkl')

    


# app
app = Flask(__name__)

# routes

@app.route('/')
def home():
    return render_template('templates/index.html')
    
@app.route('/', methods=['POST'])

def predict():
    # get data

    data = request.get_json(force=True)

    # convert data into list


    # predictions
    inputs = preprocessing(data)
    classify = neigh.predict(inputs)
    scores = generate_score(classify)
    # send back to browser
    output = {'results': scores}

    # return data
    return jsonify(results=output)


if __name__ == '__main__':
    app.run(port =5000, debug=True)
