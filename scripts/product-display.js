



let api=`https://sanju01sahu.github.io/fluffy-potato/db.json`
let list 
async function fetchData(){
    try{
          let response=await fetch(api);
          let data=await response.json();
          list = data.product[0];
          filterData(list);
         console.log(list,"pro")
    }catch(err){
      console.log(err);
    }
 }

fetchData();
let filterBy = document.getElementById("filter");
    filterBy.addEventListener("change", ()=>{
      fetchData();
    });
let product = document.getElementById("ss-product-container");
let cart = JSON.parse(localStorage.getItem("cart"))||[];


function filterData(data){
    //console.log(data);
    if(filterBy.value ===""){
      displayData(data);
    }else{
      data=data.filter((ele)=>{
        return ele.category == filterBy.value;
      })
      displayData(data);
    }

  }
//displayData(list);
function displayData(data){

    product.innerHTML="";

    data.forEach((e)=>{
        let div = document.createElement("div");
        let nameI = document.createElement("h3");
        let price = document.createElement("h3");
        let brand = document.createElement("p");
        let category = document.createElement("p");
        let description = document.createElement("p");
        let img = document.createElement("img");
        let addCart = document.createElement("button");

        nameI.innerText = `${e.name}`;
        price .innerText = `${e.price}`;
        brand.innerText = `${e.brand}`;
        category.innerText = `${e.category}`;
        description.innerText = `${e.description}`;
        img.src = `${e.images[0]}`;
        addCart.innerText = `Add To Cart`;
        
        addCart.addEventListener("click",()=>{
            if(checkDuplicate(product)){
                alert("Product Already in Cart");
              }else{ 
                cart.push({...product,quantity:1});
                localStorage.setItem("cart", JSON.stringify(cart));
                alert("Product Added To Cart");
              }
        });

        div.append(img, nameI, price, brand, category, description, addCart);
        product.append(div);


    })

}
function checkDuplicate(product){

    for(let i=0;i<cart.length; i++){
      if(cart[i].id == product.id){
        return true;
      }
    }
    return false;
  }


