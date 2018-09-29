document.getElementById("assign1Script").addEventListener("click", function(){
    document.getElementById("assign1").style.display = "block";
    document.getElementById("assign2").style.display = "none";
    document.getElementById("assign0").style.display = "none";
});

document.getElementById("assign2Script").addEventListener("click", function(){
    document.getElementById("assign2").style.display = "block";
    document.getElementById("assign1").style.display = "none";
    document.getElementById("assign0").style.display = "none";
});

window.addEventListener("load", function(){
  var date = new Date();

  var day = date.getDate();
  var month = date.getMonth();
  var year = date.getFullYear();

  if(day >= 1 && (month + 1) >= 10 && year >= 2018) {
    document.getElementById("assign0RightTab").style.display = "none";
    document.getElementById('assign1RightTab').style.display = "block";
  }

  if(day >= 8 && (month + 1) >= 10 && year >= 2018) {
    document.getElementById('assign2RightTab').style.display = "block";
  }

});
