console.log("payload injected");

var paras =[];
var cond ; 
var str =["privacy" , "policy" ,"terms" , "conditions" ]; 
for (let i = 0; i < str.length; i++) {
    if($("title").text().toLowerCase().includes(str[i]))
    {
        cond = true;
        break ;
    }
  }




if(cond)
{
    var $paragraphs = $('p');
    for (var i = 0; i < $paragraphs.length; i++) {
        var element = $paragraphs[i]; // DOM node
        var $paragraph = $(element); 
        paras.push($paragraph.text());

    }

   

        
         
           


          var messg = {
            receiver: 'sent_from_payload',
            data : paras
          }
          
          
          
         
          
          
          
         
          chrome.runtime.sendMessage(messg, function(response) {console.log('sent message from payload')});


        
        
          window.close();
} 



