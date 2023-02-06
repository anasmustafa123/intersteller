
function removeTransition(event){
    if(event.propertyName !== "transform") return;
    event.target.classList.remove('bushButton');
}
function clikButton(){
    this.classList.add("bushButton");
}
function clickSound(){
    const audio = document.querySelector('audio');
    audio.currentTime = 0;
    if (!audio) return;
    audio.play();
}
const btns = document.querySelectorAll("button");

btns.forEach( (btn) => {
    btn.addEventListener('click',  clikButton);
    btn.addEventListener("transitionend" , removeTransition);
    btn.addEventListener('click', clickSound);

})  



  