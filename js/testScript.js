var test = document.getElementById("testDiv");
document.getElementById("testScript").addEventListener("click", function(){
  console.log(test);
    document.getElementById("testDiv").style.display = "block";
    document.getElementById("mainImage").style.display = "none";
});
