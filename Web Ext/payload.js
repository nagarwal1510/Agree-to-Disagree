console.log("payload injected");


var cond ; 
var str =["privacy" , "policy" ,"terms" , "conditions" ]; 
for (let i = 0; i < str.length; i++) {
    if($("title").text().toLowerCase().includes(str[i]))
    {
        cond = true;
        break ;
    }
  }

  let csvContent = "data:text/csv;charset=utf-8,";


if(cond)
{
    var $paragraphs = $('p');
    for (var i = 0; i < $paragraphs.length; i++) {
        var element = $paragraphs[i]; // DOM node
        var $paragraph = $(element); 
        csvContent +=  $paragraph.text() + "\r\n";

    }

    var encodedUri = encodeURI(csvContent);
    var link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "my_data.txt");
    document.body.appendChild(link); // Required for FF

link.click();

    var newDiv = $("<div id='modal' class='modal'>");
    var newContent = $("<div class='modal-content'>");
    newContent.html("<h2>Open the Extension</h2>");
    var closeSpan = $("<span class='close'>");
    closeSpan.html("&times;");
    
    newContent.append(closeSpan);
    newDiv.append(newContent);
    $("body").append(newDiv);
    
    newDiv.css({
        "display": "none", 
        "position": "fixed", 
        "z-index": "4", 
        "padding-top": "10px", 
        "left": "60%",
        
        "top": "10px",
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
   
         
        

            window.close();
} 