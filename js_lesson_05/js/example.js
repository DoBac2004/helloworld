var list =document.getElementsByTagName('ul')[o];
var newitemlast=document.createElement('li');
var newtextlast=document.createTextNode('cream');
newitemlast.appendChild(newtextlast);
list.appendChild(newitemlast);
var newitemfirst=document.createElement('li');
var newtextfirst=document.createTextNode('kale');
newitemfirst.appendChild(newtextfirst);
list.insertBefore(newitemfirst,list.firstChild);
var listitems=document.querySelectorAll('li');

var i;
for(i=0;i<listitems.length;i++);
listitems[i].className='cool';
var heading=document.querySelector('h2');
var headingtext=heading.firstChild.nodeValue;
var totalitems=heading.length;
var newheading=headingtext+'<span>'+totalitems+'</span>';
heading.innerHTML=newheading;