/*

const btn = document.querySelector("button");
btn.addEventListener('click',  clikButton);





*/
function removeTransition(event){
    if(event.propertyName !== "transform") return;
    event.target.classList.remove('bushButton');
}
function clikButton(btn){
    this.classList.add("bushButton");
    console.log("asdf");
}
const btns = document.querySelectorAll("button");

btns.forEach( (btn) => {
    btn.addEventListener('click',  clikButton);
    btn.addEventListener("transitionend" , removeTransition);
})  



  