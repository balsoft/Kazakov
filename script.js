var a = document.getElementsByClassName('column-middle');
var  h=document.getElementById('wrapper');
var  hs=h.getBoundingClientRect();
var  hheight = hs.bottom - hs.top;
var  n1=a[0].style;
var  n2=a[1].style;

n1.height=hheight;
n2.height=hheight;
