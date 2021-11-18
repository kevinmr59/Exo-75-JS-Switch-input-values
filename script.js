let inputOne =document.getElementById('input1')
let inputTo =document.getElementById('input2')
let move=document.getElementById('switch')
function change () {
    let x=inputOne.value;
    inputOne.value=inputTo.value;
    inputTo.value = x;

}
move.addEventListener("click", change);

