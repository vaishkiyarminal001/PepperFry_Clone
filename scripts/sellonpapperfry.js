
let form = document.getElementById("form")
console.log(form)
let name=document.getElementById("name")
let email=document.getElementById("email")
let password=document.getElementById("password")
let Re_enter_Password=document.getElementById("Re-enter-Password")
let number=document.getElementById("number")
let otp=document.getElementById("otp")
let pincode=document.getElementById("pincode")
let city=document.getElementById("city")
let state=document.getElementById("state")
let company_name=document.getElementById("company-name")
let Address=document.getElementById("Address")
let business_phone_number=document.getElementById("business-phone-number")
let gst_number=document.getElementById("gst-number")
let select_categories=document.getElementById("select-categories")


    form.addEventListener("submit",function(event){
        event.preventDefault();
        alert("jnd")
    
    let Formdata={
        name:form.name.value,
        email:form.email.value,
        password:form.password.value,
        Re_enter_Password:form.Re_enter_Password.value,
        number:form.number.value,
        otp:form.otp.value,
        pincode:form.pincode.value,
        city:form.city.value,
        state:form.state.value,
        company_name:form.company_name.value,
        Address:form.Address.value,
        business_phone_number:form.select-categories.value,
        gst_number:form.gst_number.value,
        select_categories:form.select_categories.value
    
    }
    console.log(Formdata)
    console.log("vishal")
    })
    

