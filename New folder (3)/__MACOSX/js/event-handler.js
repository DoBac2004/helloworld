function checkusername(){
    var elmsg=document.getElementById('feedback');
    if(elusername.value.length<5){
        elmsg.textContent='username must be 5 characters or more';
    }else{
        elmsg.textContent='';
    }
}
var elusername=document.getElementById('username');
elusername.onblur=checkusername