
  
function login(){
    let useremail=document.getElementById("mail").value
    let userpassword=document.getElementById("psw").value
    
    
    console.log(useremail,userpassword,"done")
const data = JSON.parse(localStorage.getItem('signup'));
// console.log(data[0]["email"],"data")
// console.log("hello worlkd")
console.log(data,"data")

for(let i=0; i<data.length ; i++){
   if(data[i]["email"]==useremail && data[i]["password"]==userpassword){
    alert("login done")
    window.location.href="home.html"
   }
}



}

login()

// let useremail=document.getElementById("mail")
// let userpassword=document.getElementById("psw")


// function loginuser(){

//     let login_user={
//         useremail:useremail.value,
//         userpassword:userpassword.value
//     }
    // console.log(login_user,"login_user")
    
    
    // const login_request =fetch("https://sanju01sahu.github.io/fluffy-potato/auth.json",{
    //     method:'POST',
    //     headers:{
    //         "Content-Type":'application/json'
    //     },
    //     body:JSON.stringify(login_user)
    
    //     })
    //     .then((response)=>{
    //         console.log(response)
    //     })
    //     .catch((error)=>{
    //         console.log(error)
    //     })
        
    // }
    
    // loginuser()
    
















//  async function Feacthdata(){
//      try {
//      const data=await fetch("https://sanju01sahu.github.io/fluffy-potato/auth.json")
//      const realdata= await data.json();
//      console.log(realdata)
//     } catch (error) {
//         console.log(error)
//     }
    
// }
// Feacthdata()

