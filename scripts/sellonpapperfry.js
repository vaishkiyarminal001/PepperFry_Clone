
 let localdata=JSON.parse(localStorage.getItem("data")) || []

let form = document.getElementById("form")
let Name=document.getElementById("name")
let Email=document.getElementById("email")
let Password=document.getElementById("password")
let RePassword=document.getElementById("re-enter-password")
let number=document.getElementById("number")
// let otp=document.getElementById("otp")
let pincode=document.getElementById("pincode")
let city=document.getElementById("city")
let state=document.getElementById("state")
let company_name=document.getElementById("company-Name")
let Address=document.getElementById("address")
let business_phone_number=document.getElementById("business-phone-number")
let gst_number=document.getElementById("gst-number")
let select_categories=document.getElementById("select-categories")


    form.addEventListener("submit",function(event){
        event.preventDefault();
        
    
    let Formdata={
        name:Name.value,
        email:Email.value,
        password:Password.value,
        Re_enter_Password:RePassword.value,
        number:number.value,
        // otp:form.otp.value,
        pincode:pincode.value,
        city:city.value,
        state:state.value,
        company_name:company_name.value,
        Address:Address.value,
        business_phone_number:business_phone_number.value,
        gst_number:gst_number.value,
        select_categories:select_categories.value
    
    }
    // console.log(Formdata,"Formdata")
    
    localdata.push(Formdata)
    localStorage.setItem("data",JSON.stringify(localdata))
    
})
    

