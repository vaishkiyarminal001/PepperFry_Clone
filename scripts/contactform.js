let form = document.querySelector("form");
let userData = JSON.parse(localStorage.getItem("work")) || [];

form.addEventListener("submit",(e)=>{
    e.preventDefault();
   
    let obj = {
        name : document.getElementById("name").value,
        phone : document.getElementById("phone").value,
        email : document.getElementById("email").value,
        subject : document.getElementById("subject").value,
        message : document.getElementById("message").value,
    
    }
     
     userData.push(obj);
    localStorage.setItem("work",JSON.stringify(userData));

})