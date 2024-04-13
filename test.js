let cods= document.getElementById("cods");
let remove= document.getElementById("remove");
let play= document.getElementById("play");
let result= document.getElementById("result");

play.onclick =()=>{
    result.innerHTML = cods.value;
    localStorage.setItem("RESULT",cods.value)
}
remove.onclick =()=>{
    result.innerHTML = "";
    cods.value = "";
}
onload =()=>{
   // cods.value = localStorage.getItem("RESULT") ;
}
