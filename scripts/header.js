let dropBtn = document.getElementsByClassName("drop-btn");
let isHidden = document.getElementsByClassName("is-hidden");
//console.log(dropBtn)
    
for(let i=0;i<dropBtn.length;i++){
    dropBtn[i].addEventListener("click",()=>{
         isHidden[i].style.display = "flex"; 
        
    })
}