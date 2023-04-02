let leftBar=document.getElementById("left-bar")

    let cart=JSON.parse(localStorage.getItem("cart")) || [];

    function displayData() {
      leftBar.innerHTML = "";
      cart.forEach((e) => {
        let div = document.createElement("div");
        let nameI = document.createElement("h3");
        let image = document.createElement("img");
        let brand = document.createElement("p");
        let category = document.createElement("p");
        let price = document.createElement("h3");
        let description = document.createElement("p");
        let Remove = document.createElement("button");
        let Increase = document.createElement("button");
        let Decrease = document.createElement("button");
        let Quantity = document.createElement("span");
        e.price =+(e.price);
        console.log(e);

        image.setAttribute = e.images[0];
        brand.textContent = e.brand;
        category.textContent = e.category;
        price.textContent = 50000;
        description.textContent = e.description;
        Quantity.textContent = e.quantity;
        Increase.textContent="+"
        Decrease.textContent="-"
        Remove.textContent = "Remove"
        

        Remove.addEventListener("click", () => {
          cart=cart.filter((ele)=>{
            return ele.id!==e.id
          })
          localStorage.setItem("cart",JSON.stringify(cart))
          displayData()
        });

        Increase.addEventListener("click", () => {
           e.quantity++
    
        localStorage.setItem("cart",JSON.stringify(cart))
          displayData()
      
        });

       Decrease.addEventListener("click", () => {
          if(e.quantity>1){
            e.quantity--
            localStorage.setItem("cart",JSON.stringify(cart))
          displayData()
          }
      
        });

        let sum=0;
        for(let i=0;i<cart.length;i++){
            sum+=cart[i].price*cart[i].quantity;
        }
    
         document.getElementById("cart-total").textContent=sum;
        div.append(image,nameI, price, brand, category,description, Increase,Quantity,Decrease, Remove)
        leftBar.append(div);
      });

      // console.log("display", data);
    }
    displayData()
