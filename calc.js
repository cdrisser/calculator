
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
