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










    }
   var nul = ["null", "null", "null"];
    if(agree_check)
    {chrome.runtime.sendMessage(final_link, function(response) {});}
    else {chrome.runtime.sendMessage(nul, function(response) {});}