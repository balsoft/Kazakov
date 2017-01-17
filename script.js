var div = document.getElementById('column-left');
var divSize = div.getBoundingClientRect();
var height = divSize.bottom - divSize.top;
div.style.height = 2000 + 'px';
