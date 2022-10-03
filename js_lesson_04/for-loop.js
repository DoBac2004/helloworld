var score=[24,32,17];
var arraylength=scores.length;
var roundnumber=0;
var msg='';
for( var i=0; i<arraylength;i++) {
    roundnumber = (i + 1);
    msg += 'round' + roundnumber + ':';
    msg += score[i] + '<br/>';
}
document.getElementById('answer').innerHTML=msg;