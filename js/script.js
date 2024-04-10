let second = 10;


const secondElem = document.getElementById("second");
const happyElem  = document.getElementById("elem")
const buonAnno  = document.getElementById("buonanno")

setInterval(function(){
second--
document.getElementById("second").innerText = second;
if (second === 0) {
    secondElem.classList.add("none")
    happyElem.classList.remove("none")
    buonAnno.classList.remove("none")
}

}, 1000)