console.log('index running');

var label = ['Score','Grade','good','neutral','bad','blocker'];

let bgpage = chrome.extension.getBackgroundPage();
console.log(bgpage.para); 

for(var i=0 ; i<bgpage.para.length;i++)
{
    document.getElementById('replace').innerHTML += label[i]+' '+bgpage.para[i]+'<br>';
}
