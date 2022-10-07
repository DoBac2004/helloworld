var elusername=document.getElementById('username');
var elmsg =document.getElementById('feedback');
function checkusername(minlength){
    if(elusername.value.length<minlength){
        elmsg.innerHTML='usernaem must be'+minlength+'characters or more';
    }else{
        elmsg.innerHTML='';
    }
}
elusername.addEventListener('blur',function (){
    checkusername(5);
},false);