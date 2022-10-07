function checkusername(){
    var elmsg=document.getElementById('feedback');
    if(this.value.length<5){
        elmsg.textContent='username must be 5 characters or more';
    }else{
        elmsg.textContent='';
    }
}
var elusername=document.getElementById('username ');
elusername.addEventListener('blur',checkusername,false);
