


// all function should be works if login successfull only 

let addProductBtnAV=document.getElementById("AV-add");
let addproductspaceAV=document.getElementById("AV-addproduct");

addProductBtnAV.addEventListener("click",()=>{
   addproductspaceAV.style.display === "block";
     if(addproductspaceAV.style.display === "none"){
        addproductspaceAV.style.display= "block";
        addProductBtnAV.style.backgroundColor= "rgb(113, 238, 113)"
        
     }else{
      addproductspaceAV.style.display= "none";
      addProductBtnAV.style.backgroundColor= "#f0f0f0"
     }
     console.log("button clicked");
   
});

      
let api=`https://sanju01sahu.github.io/fluffy-potato/db.json`
       async function fetchData(){
          try{
                let response=await fetch(api);
                let data=await response.json();
                disaplayDATA(data)
                console.log(data);
          }catch(err){
            console.log(err);
          }
       }

        fetchData();



   localStorage.setItem("products",JSON.stringify(productdata));
   
 let productsAV=document.getElementById("AV-productdata");
    
  let allproductdataAV=JSON.parse(localStorage.getItem("products"));
//   console.log(allproductdataAV);
  // let productTotal=document.getElementById("AV-productTotal");
  // productTotal.innerText=`TOTAL :${allproductdataAV.length}`;
  async function disaplayDATA(data){   
  data.forEach((e)=>{
    let datadivAV=document.createElement("div");
    let nameAV=document.createElement("h3");
    let priceAV=document.createElement("h3");
    let brandAV=document.createElement("h3");
    let categoryAV=document.createElement("h3");
    let descAV=document.createElement("h3");
    let imageAV=document.createElement("img");
    let delBtn=document.createElement("button");
    nameAV.textContent=`NAME  :${e.name}`;
    brandAV.textContent=`BRAND  :${e.brand}`;
    priceAV.textContent=`PRICE :${e.price}`;
    categoryAV.textContent=`CATEGORY :${e.category}`;
    descAV.textContent=`DESCRIPTION  :${e.description}`
    imageAV.src=e.images[0];
    delBtn.textContent="Delete"
    datadivAV.append(nameAV,brandAV,priceAV,categoryAV,descAV,imageAV,delBtn);
    productsAV.append(datadivAV)
   // console.log(datadivAV);

  })
   
       
  }

// filter part 
  let selectType=document.getElementById("AV-category")
  function filterData(){
    console.log(selectType.textContent);
  }
  selectType.addEventListener("change",()=>{
      //   console.log(selectType);
  })


  // disaplayDATA(allproductdataAV);
  //code to toggle the display products:


let productsBtnAV=document.getElementById("AV-products");
let productContainerAV=document.getElementById("AV-productdata");
productsBtnAV.addEventListener("click",()=>{
    if(productContainerAV.style.display=== "none"){
      productContainerAV.style.display= "block";
      productsBtnAV.style.backgroundColor= "rgb(113, 238, 113)";
      console.log("change to block");
    }else{
      productContainerAV.style.display= "none";
      productsBtnAV.style.backgroundColor= "#f0f0f0";
      console.log("change to none");
    }
});
