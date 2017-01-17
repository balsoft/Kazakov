var a = document.getElementsByClassName('column-middle'),
  h=document.getElementById('wrapper'),
  hs=h.getBoundingClientRect(),
  hheight = hs.bottom - hs.top,
  n1=a[0].style,
  n2=a[1].style;

n1.height=hheight;
n2.height=hheight;
