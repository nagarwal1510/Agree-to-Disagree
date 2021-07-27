console.log("content running for A2D 0.2");


//var button_check = false;
var agree_check = false;
var check_str = [ "terms", "conditions" , "privacy" , "policy" , "cookie"  , "terms of service" , "terms and conditions" , 
"rights" , "legal" ];
var $divs = $('div');
 var list = [];   
for (var i = 0; i < $divs.length; i++) {
        var element = $divs[i]; // DOM node
        var $div = $(element);    
        
        for(var p=0 ; p < check_str.length ; p++)
        if(($div.text().toLowerCase().includes("agree to") || $div.text().toLowerCase().includes("consent to") ) && $div.text().toLowerCase().includes(check_str[p]))
        {list.push($div.text().toLowerCase());
            agree_check = true;   
          break;
        }   
        
        if(agree_check)
        break;
    }
    //console.log(list);




    var links = [];

    var cond = true;
    
       
    var str =["privacy" , "policy" ,"terms" , "conditions" ]; 
         
    var final_link = [];


    if(agree_check)
    {  
   

        jQuery('a').each( function() { 
            links.push(jQuery(this).attr('href')) ;
            
        });

        console.log(links);
        
        for (let p=0; p<links.length ; p++)
        {    if(links[p] == undefined)
            {
                continue;
            }
            
            for (let i = 0; i < str.length; i++)
            {  

                if(links[p].includes(str[i]))
                {

                    if(  links[p].includes("http") || links[p].includes("https")  )
                       {
                    final_link.push(links[p]);
                    //console.log(links[p]);
                       }

                    else {
                       final_link.push(window.location.href.split('/')[0]+'//'+window.location.href.split('/')[2]+links[p]);
                    }
                } 
                
            }
        }

      // console.log(final_link);






      var msg2 = {
        receiver: 'background',
        data: final_link
    };
  
    
chrome.runtime.sendMessage(msg2, function(response) {});
// Whole notification popup message is enclosed in the following block
                      {  var newDiv = $("<div id='modal' class='modal'>");
                         var newContent = $("<div class='modal-content'>");
                         newContent.html("<h2>Take a Quick Privacy Check before you agree to anything</h2>");
                         var closeSpan = $("<span class='close'>");
                         // closeSpan.html("&times;");
    
                         newContent.append(closeSpan);
                         newDiv.append(newContent);
                         $("body").append(newDiv);
    
                          newDiv.css({
                           "display": "none", 
                          "position": "fixed", 
                         "z-index": "4", 
                          "padding-top": "10px", 
                         "left": "70%",
        
                         "top": "50px",
                         "width": "30%", 
                         "height": "80%", 
                         "overflow": "auto", 
                         "background-color": "rgb(0,0,0)", 
                          "background-color": "rgba(0,0,0,0)" 
                         });

                        newContent.css({
                        "background-color": "rgb(0,0,0)", 
                        "background-color": "rgba(0,0,0,0.3)",
                        "margin": "auto",
                        "padding": "20px",
        
        
                      "border": "1px solid #888",
                      "text-align": "center",
                      "width": "80%", 
                      "font-weight": "bold",
                      "font-size": "20px"
                       });

                          closeSpan.css({
                          "color": "#aaaaaa",
                          "float": "right",
                         "font-size": "30px",
                          "font-weight": "bold"
                         })

                        newDiv.css("display", "block");
      
                        var span = $(".close")[0];
                         span.onclick = function(){
                          newDiv.css("display", "none");
        
                        } 

                         window.onclick = function(event) {
        
                          newDiv.css("display", "none");
        
                         }
   

                        }
       //Notification block ends
    
    }




    var nul = ["null", "null", "null"];
    var msg1 = {
        receiver: 'background',
        data: nul
    };
    
