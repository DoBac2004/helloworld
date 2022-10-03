var firstitem=document.getElementById('one');
if(firstitem.hasAttribute('class')){
    var attr=firstitem.getAttribute('class');
    var el=document.getElementById('scriptResults');
    el.innerHTML='<p> the first item has a class name:'+attr+'</p>';
    
}