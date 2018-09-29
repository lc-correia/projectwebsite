document.getElementById("assign1Script").addEventListener("click", function(){
    document.getElementById("assign1").style.display = "block";
    document.getElementById("assign2").style.display = "none";
    //document.getElementById("mainImage").style.display = "none";
});

document.getElementById("assign2Script").addEventListener("click", function(){
    document.getElementById("assign2").style.display = "block";
    document.getElementById("assign1").style.display = "none";
    //document.getElementById("mainImage").style.display = "none";
});
