document.addEventListener("click",()=>{
    document.body.style.backgroundColor= randomColor();
})
function randomColor(){
    const colors =["red","green","black","pink","brown","yellow","blue","purple","orange","graw"];
    return colors[Math.floor(Math.random()* colors.length)];
}