var a = document.getElementsByClassName('column-middle');
var h = document.getElementById('wrapper');

var  n1=a[0].style;
var  n2=a[1].style;
var Hei=h.style;
Hei.minHeight="100px";
n1.height=Hei.height;
n2.height=Hei.height;
alert(Hei.height);
