console.log("backgorund running");

var url1 ;
chrome.runtime.onMessage.addListener(receiver);

function receiver(request, sender, sendResponse)
{    

     if(request[1].toString() != "null")
     {
     url1 = request[1].toString();
    console.log(url1.toString());



    chrome.tabs.create({url:url1},function(newTab) {

        chrome.extension.getBackgroundPage().chrome.tabs.executeScript(null, { file: "jquery-3.3.1.min.js" }, function() {
            chrome.extension.getBackgroundPage().chrome.tabs.executeScript(null, { file: "payload.js" }, function() {});
        });
    
    
           
            });
        }
        
}