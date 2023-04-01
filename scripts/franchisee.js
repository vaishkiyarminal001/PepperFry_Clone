
let formEl=document.getElementsByClassName("AV-form");

let buttonEl=document.getElementById("submit");

buttonEl.addEventListener("click",()=>{
    let nameEl=document.getElementById("name");
    let emailEl=document.getElementById("email");
    let mobile=document.getElementById("phone");
    let otp=document.getElementById("otp");
    let city=document.getElementById("city");

    let franchiseUser={
        name:nameEl.value,
        email:emailEl.value,
        mobile:mobile.value,
        otp:otp.value,
        city:city.value,
    }
    console.log(franchiseUser);
})