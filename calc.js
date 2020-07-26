
let numberarr = [];
let displaystr = "";
let total =0;
let firstnumber = false;

const num = document.getElementsByClassName('number');
//creates border so user can see what button they pushed
for(var i=0; i<num.length; i++){
num[i].addEventListener("mousedown", (event)=>{
  event.target.style.border = "2px solid black";
})}
//creates border so user can see what button they pushed
for(var i=0; i<num.length; i++){
num[i].addEventListener("mouseup", (event)=>{
  event.target.style.border = "";
})}

function beforeOperation(a){

displaystr += a;
  document.getElementById('display').innerHTML = displaystr;

}

function reset(){
document.getElementById('display').innerHTML = "Waiting for input..."
displaystr = "";
  document.getElementById('reset-dialog').innerHTML = "Reset Complete";
  setTimeout(()=>{
    document.getElementById('reset-dialog').innerHTML = "";
  },5000);
}
function completeOperation(op){
  const convert = displaystr.indexOf(".") == -1 ?parseFloat(displaystr): parseInt(displaystr);
  if(firstnumber){
    total = convert;
    firstnumber = false;
  }
  switch (op){
    case "div":
      addToHistory(displaystr);
      addToHistory("/");
      total/= convert;
      displaystr ="";
      break;
    case "x":
      break;
    case"-":
      break;
    case "+" :
      break;
  }
}
function addToHistory(str){
  const ul = document.getElementById("historyul");
  const li = document.createElement('li');
  li.innerHTML = str;
  ul.appendChild(li);
}
function calculate(){
  const convert = displaystr.indexOf(".") == -1 ?parseFloat(displaystr): parseInt(displaystr);
  console.log(total);
  document.getElementById('display').innerHTML = total;
}
