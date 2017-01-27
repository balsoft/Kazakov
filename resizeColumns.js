setInterval(()=>{
  document.querySelectorAll(".column")[0].style.height = document.getElementById("wrapper").getClientRects()[0].height + 50 + "px"
  document.querySelectorAll(".column")[1].style.height = document.getElementById("wrapper").getClientRects()[0].height + 50 + "px"
}, 100);
