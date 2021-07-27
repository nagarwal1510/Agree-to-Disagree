console.log('index running');


let bgpage = chrome.extension.getBackgroundPage();
console.log(bgpage.para); 
chrome.runtime.onMessage.addListener(receiver);

function receiver(request, sender, sendResponse)
{
if(request.data && request.receiver == 'index')
{
    $('body').css('background-image',
    'url("agree.gif")');
    
    document.getElementById('replace_score').innerHTML    = '<span class="flicker">S</span>co<span class="fast-flicker">re </span>'+'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;              '+'<b>'+ bgpage.para[0]+'</b>';
    document.getElementById('replace_grade').innerHTML    = '<span class="flicker">Gra</span><span class="fast-flicker">d</span>e'+'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;               '+'<b>'+ bgpage.para[1]+'</b>';
    document.getElementById('replace_good').innerHTML     = '<span class="fast-flicker">Go</span><span class="flicker"></span>od  &#x1F642;'+'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     '+ '<b>'+bgpage.para[2]+'</b>';
    document.getElementById('replace_neutral').innerHTML  = '<span class="flicker">Neu</span>tr<span class="fast-flicker">al</span>  &#x1F611;'+'&nbsp;&nbsp;  '+'<b>'+ bgpage.para[3]+'</b>';
    document.getElementById('replace_bad').innerHTML      = '<span class="fast-flicker">B</span><span class="flicker">ad</span>  &#x1F615;'+'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      '+'<b>'+ bgpage.para[4]+'</b>';
    document.getElementById('replace_blocker').innerHTML  = '<span class="fast-flicker">Bloc</span><span class="flicker">ker</span>  &#x1F922;'+'&nbsp;&nbsp;  '+ '<b>'+bgpage.para[5]+'</b>';
    document.getElementById('replace_button').innerHTML   = '<button type="button" id="reset"> Reset </button>';
  
    
    $("#reset" ).click(function() {
      

        $('body').css('background-image',
        'url("giphy.gif")');
        
        document.getElementById('replace_score').innerHTML = '';
        document.getElementById('replace_grade').innerHTML = '';
        document.getElementById('replace_good').innerHTML = '';
        document.getElementById('replace_neutral').innerHTML = '';
        document.getElementById('replace_bad').innerHTML = '';
        document.getElementById('replace_blocker').innerHTML = '';
        document.getElementById('replace_button').innerHTML= '';
        


      });
}

}