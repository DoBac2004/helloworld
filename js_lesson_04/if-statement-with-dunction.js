var score=75;
var msg='';
function congratulate(){
    msg+='congratulations!';
}
if(score>=50){
    congratulate();
    msg+='proceed to the next round.';
}
var el=document.getElementById('answer');
el.innerHTML=msg;
