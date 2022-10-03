var firstiem=document.getElementById('one');
var showtextcontent=firstiem.textContent;
var showinnertext=firstiem.innerText;
var msg='<p>textcontent:'+showinnertext+'</P>';
msg+='<p>innertext:'+showinnertext+'</p>';
var le=document.getElementById('scriptResults');
el.innerHTML=msg;
firstiem.textContent='sourdough bread';
