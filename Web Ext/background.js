console.log("backgorund running");
window.para = [];
var url1 ;
var post_url = 'http://127.0.0.1:5000/';
var message_for_index = {
    receiver: 'index',
    data : true
  }
chrome.runtime.onMessage.addListener(receiver);

function receiver(request, sender, sendResponse)
{    
     if(request.receiver == 'background')
    {
        if(request.data[1].toString() != "null")
        {
        url1 = request.data[1].toString();
        console.log(url1.toString());

        sendResponse({});

        chrome.tabs.create({url:url1},function(newTab) {

        chrome.extension.getBackgroundPage().chrome.tabs.executeScript(null, { file: "jquery-3.3.1.min.js" }, function() {
            chrome.extension.getBackgroundPage().chrome.tabs.executeScript(null, { file: "payload.js" }, function() {});
        });
    
    
           
            });
        }
        
    }    
    
    if(request.receiver == 'sent_from_payload')
    {
        //para=request.data;
        
        console.log('connecting with model');
         $.post(post_url,JSON.stringify(request.data),function(data, status, res) {   para = data.results.results; console.log(data.results.results); 
            chrome.runtime.sendMessage(message_for_index, function(response) {console.log('sent message from background to index')});
        
        })
         
    
        }


    sendResponse({});

}



