


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

show products
let productdata=[
          {
             "id":"1",
             "name":"Mid-Century Fabric 3 Seater Sofa in Grey Colour",
             "category":"sofa",
             "brand":"Dreamzz Furniture",
             "price":"52,500",
             "color":"Grey",
             "weight":"26 KG",
             "material":"Fabric",
             "dimension":["81","198","81"],
             "assembly":"Carpenter Assembly",
             "warranty":"36",
             "sku":"FN1609201-P-WH35490",
             "description":"Fulfilling Dreams is like a fine delicacy that is desired by many, but enjoyed by few. Here you will find the perfect combination of your dreams & our passion coming together to make your design dreams come true. Whether our furniture becomes the centrepiece of your freshly designed room or a perfect accent to existing dcor, we deliver furniture for your individual needs.",
             "seller":"https://ii1.pepperfry.com/supplierpng/190682c3acf49a525daddfa40c795ffa.png?_v=17",
             "images":["https://ii1.pepperfry.com/media/catalog/product/m/i/1250x625/mid-century-classic-3-seater-sofa-in-grey-colour-by-dreamzz-furniture-mid-century-classic-3-seater-s-n0e5gv.jpg",
                        "https://ii1.pepperfry.com/media/catalog/product/m/i/1250x625/mid-century-classic-3-seater-sofa-in-grey-colour-by-dreamzz-furniture-mid-century-classic-3-seater-s-nyuqa4.jpg",
                     "https://ii3.pepperfry.com/media/catalog/product/m/i/1250x625/mid-century-classic-3-seater-sofa-in-grey-colour-by-dreamzz-furniture-mid-century-classic-3-seater-s-ha30pr.jpg",
                 "" ]
         },
         {
             "id":"2",
             "name":"Inverness Solid Wood 2 Seater Sofa In Provincial Teak Finish",
             "category":"sofa",
             "brand":"Woodsworth from Pepperfry",
             "price":"30,999",
             "color":"Provincial Teak",
             "weight":"34 KG",
             "material":"Mango Wood",
             "dimension":["45.72","129.54","72.6"],
             "assembly":"Carpenter Assembly",
             "warranty":"36",
             "sku":"FM1920630-S-PM17013",
             "description":"Woodsworth epitomizes the idea of bringing exceptional value with distinctive furniture for your home. Reflecting designs that are sleek, trendy and functional, Woodsworth delivers the right blend of style and value, aesthetics and functionality, as well as comfort and uncompromised quality.",
             "seller":"https://ii1.pepperfry.com/supplierpng/44fc47e920714f92a9a38e8465fe2597.png?_v=19",
             "images":["https://ii3.pepperfry.com/media/catalog/product/e/l/1250x625/elve-solid-wood-2-seater-sofa-in-provincial-teak-finish---woodsworth-by-pepperfry-elve-solid-wood-2--odanwf.jpg",
                     "https://ii3.pepperfry.com/media/catalog/product/e/l/1250x625/elve-solid-wood-2-seater-sofa-in-provincial-teak-finish---woodsworth-by-pepperfry-elve-solid-wood-2--efhgqu.jpg",
                     "https://ii3.pepperfry.com/media/catalog/product/e/l/1250x625/elve-solid-wood-2-seater-sofa-in-provincial-teak-finish---woodsworth-by-pepperfry-elve-solid-wood-2--rgqipw.jpg"]
         },
         {
             "id":"3",
             "name":"Snooky Fabric 3 Seater Sofa in Charcoal Grey Colour",
             "category":"sofa",
             "brand":"Febonic",
             "price":"15,479",
             "color":"Grey",
             "weight":"55 KG",
             "material":"Fabric",
             "dimension":["81","185","79"],
             "assembly":"Carpenter Assembly",
             "warranty":"36",
             "sku":"FN1937509-S-WH38586",
             "description":"Modern Style Sofas usually come in fixed back with cushions attached to the frame. They mostly come with minimal details & compact proportions. These sofas can be with or without arms.",
             "seller":"https://ii1.pepperfry.com/supplierpng/d61ceb110e4519dd8ad4a694ed2db020.png?_v=18",
             "images":["https://ii1.pepperfry.com/media/catalog/product/s/n/1250x625/snooky-3-seater-sofa-in-grey-colour-by-febonic-snooky-3-seater-sofa-in-grey-colour-by-febonic-ttsa3k.jpg",
                     "https://ii3.pepperfry.com/media/catalog/product/s/n/1250x625/snooky-3-seater-sofa-in-grey-colour-by-febonic-snooky-3-seater-sofa-in-grey-colour-by-febonic-jm9a0c.jpg",
                     "https://ii3.pepperfry.com/media/catalog/product/s/n/1250x625/snooky-3-seater-sofa-in-grey-colour-by-febonic-snooky-3-seater-sofa-in-grey-colour-by-febonic-lzoyvk.jpg"]
         },
         {
             "id":"4",
             "name":"Daroo Velvet 3 Seater Sofa in Pine Green Colour",
             "category":"sofa",
             "brand":"Febonic",
             "price":"18,989",
             "color":"Pine Green",
             "weight":"45 KG",
             "material":"Velvet Fabric",
             "dimension":["81","185","76"],
             "assembly":"Carpenter Assembly",
             "warranty":"36",
             "sku":"FN1980635-S-WH38586",
             "description":"Modern Style Sofas usually come in fixed back with cushions attached to the frame. They mostly come with minimal details & compact proportions. These sofas can be with or without arms.",
             "seller":"https://ii1.pepperfry.com/supplierpng/d61ceb110e4519dd8ad4a694ed2db020.png?_v=18",
             "images":["https://ii1.pepperfry.com/media/catalog/product/d/a/1250x625/daroo-3-seater-sofa-in-pine-green-colour-by-febonic-daroo-3-seater-sofa-in-pine-green-colour-by-febo-anoi9u.jpg",
                     "https://ii3.pepperfry.com/media/catalog/product/d/a/1250x625/daroo-3-seater-sofa-in-pine-green-colour-by-febonic-daroo-3-seater-sofa-in-pine-green-colour-by-febo-6js5fc.jpg",
                     "https://ii1.pepperfry.com/media/catalog/product/d/a/1250x625/daroo-3-seater-sofa-in-pine-green-colour-by-febonic-daroo-3-seater-sofa-in-pine-green-colour-by-febo-i256ps.jpg"]
         },
         {
             "id":"5",
             "name":"Daisuke 3 Seater Sofa In Grey Colour",
             "category":"sofa",
             "brand":"Mintwud from Pepperfry",
             "price":"15,999",
             "color":"Grey",
             "weight":"22.5 KG",
             "material":"Rubber Wood",
             "dimension":["81.28","157.48","76.2"],
             "assembly":"Carpenter Assembly",
             "warranty":"36",
             "sku":"FN1759259-P-WH5046",
             "description":"Mintwud was conceptualized for compact homes which demand intelligent designs for small spaces, befitting modern lifestyles. Reusing resources has always underlined the very philosophy and every design is made with the best engineered wood, quality checked for accurate dimensions, sturdiness and finish.",
             "seller":"https://ii1.pepperfry.com/supplierpng/da4609255b9503ff3d95b27077f0164e.png?_v=22",
             "images":["https://ii1.pepperfry.com/media/catalog/product/d/a/1250x625/daisuke-3-seater-sofa-in-brown-colour-by-mintwud-daisuke-3-seater-sofa-in-brown-colour-by-mintwud-65nxmz.jpg",
                     "https://ii2.pepperfry.com/media/catalog/product/d/a/1250x625/daisuke-3-seater-sofa-in-brown-colour-by-mintwud-daisuke-3-seater-sofa-in-brown-colour-by-mintwud-gcs0wt.jpg",
                     "https://ii2.pepperfry.com/media/catalog/product/d/a/1250x625/daisuke-3-seater-sofa-in-brown-colour-by-mintwud-daisuke-3-seater-sofa-in-brown-colour-by-mintwud-c3tjue.jpg"]
         },
         {
             "id":"6",
             "name":"Clarksville Velvet 3 Seater Sofa In Teal Green Colour",
             "category":"sofa",
             "brand":"Woodsworth",
             "price":"66,999",
             "color":"Teal Green",
             "weight":"40 KG",
             "material":"Velvet Fabric",
             "dimension":["36.5","83.75","36.25"],
             "assembly":"Carpenter Assembly",
             "warranty":"36",
             "sku":"FM1958750-S-WH32456",
             "description":"Woodsworth epitomizes the idea of bringing exceptional value with distinctive furniture for your home. Reflecting designs that are sleek, trendy and functional, Woodsworth delivers the right blend of style and value, aesthetics and functionality, as well as comfort and uncompromised quality.",
             "seller":["https://ii1.pepperfry.com/media/catalog/product/c/l/1250x625/clarksville-3-seater-sofa-in-teal-green-colour--by-woodsworth-clarksville-3-seater-sofa-in-teal-gree-udcx6k.jpg",
                     "https://ii1.pepperfry.com/media/catalog/product/c/l/1250x625/clarksville-3-seater-sofa-in-teal-green-colour--by-woodsworth-clarksville-3-seater-sofa-in-teal-gree-o2eaq9.jpg",
                     "https://ii3.pepperfry.com/media/catalog/product/c/l/1250x625/clarksville-3-seater-sofa-in-teal-green-colour--by-woodsworth-clarksville-3-seater-sofa-in-teal-gree-ogcxnz.jpg"]
         },
         {
             "id":"7",
             "name":"Bari Leatherette 3 Seater Sofa In Dark Brown Colour",
             "category":"sofa",
             "brand":"Woodsworth",
             "price":"35,499",
             "color":" Dark Brown",
             "weight":"56 KG",
             "material":"Leatherette",
             "dimension":["94","205.7","94"],
             "assembly":"Carpenter Assembly",
             "warranty":"36",
             "sku":"FN1755720-S-WH32517",
             "description":"Woodsworth epitomizes the idea of bringing exceptional value with distinctive furniture for your home. Reflecting designs that are sleek, trendy and functional, Woodsworth delivers the right blend of style and value, aesthetics and functionality, as well as comfort and uncompromised quality.",
             "seller":"https://ii1.pepperfry.com/supplierpng/193aeccdcbe6bfa417617a080cbd4a59.png?_v=16",
             "images":["https://ii3.pepperfry.com/media/catalog/product/b/a/1250x625/bari-3-seater-sofa-in-dark-brown-colour-by-furnitech-bari-3-seater-sofa-in-dark-brown-colour-by-furn-diyk4f.jpg",
                     "https://ii1.pepperfry.com/media/catalog/product/b/a/1250x625/bari-three-seater-sofa-in-dark-brown-colour-by-minthomez-bari-three-seater-sofa-in-dark-brown-colour-z3gdav.jpg",
                     "https://ii2.pepperfry.com/media/catalog/product/b/a/1250x625/bari-three-seater-sofa-in-dark-brown-colour-by-minthomez-bari-three-seater-sofa-in-dark-brown-colour-vbsezu.jpg"]
         },
         {
             "id":"8",
             "name":"Minami 3 Seater Sofa in Spruce Blue Colour",
             "category":"sofa",
             "brand":"Mintwud from Pepperfry",
             "price":"26,999",
             "color":"Spruce Blue",
             "weight":"40 KG",
             "material":"Fabric",
             "dimension":["34.5","","83.82"],
             "assembly":"Carpenter Assembly",
             "warranty":"36",
             "sku":"FN1857230-S-WH32516",
             "description":"Mintwud was conceptualized for compact homes which demand intelligent designs for small spaces, befitting modern lifestyles. Reusing resources has always underlined the very philosophy and every design is made with the best engineered wood, quality checked for accurate dimensions, sturdiness and finish.",
             "seller":"https://ii1.pepperfry.com/supplierpng/543f844372b8ee7ed13a1db67d7a51d1.png?_v=16",
             "images":["https://ii1.pepperfry.com/media/catalog/product/m/i/1250x625/minami-3-seater-sofa-in-blue-colour-by-mintwud-minami-3-seater-sofa-in-blue-colour-by-mintwud-exjose.jpg",
                     "https://ii2.pepperfry.com/media/catalog/product/m/i/1250x625/minami-3-seater-sofa-in-blue-colour-by-mintwud-minami-3-seater-sofa-in-blue-colour-by-mintwud-5bq7co.jpg",
                     "https://ii1.pepperfry.com/media/catalog/product/m/i/1250x625/minami-3-seater-sofa-in-blue-colour---mintwud-by-pepperfry-minami-3-seater-sofa-in-blue-colour---min-8t8x22.jpg"]
         },
         {
             "id":"9",
             "name":"Minami 3 Seater Sofa in Spruce Blue Colour",
             "category":"sofa",
             "brand":"Mintwud from Pepperfry",
             "price":"26,999",
             "color":"Spruce Blue",
             "weight":"40 KG",
             "material":"Fabric",
             "dimension":["34.5","","83.82"],
             "assembly":"Carpenter Assembly",
             "warranty":"36",
             "sku":"FN1857230-S-WH32517",
             "description":"Mintwud was conceptualized for compact homes which demand intelligent designs for small spaces, befitting modern lifestyles. Reusing resources has always underlined the very philosophy and every design is made with the best engineered wood, quality checked for accurate dimensions, sturdiness and finish.",
             "seller":"https://ii1.pepperfry.com/supplierpng/543f844372b8ee7ed13a1db67d7a51d1.png?_v=16",
             "images":["https://ii1.pepperfry.com/media/catalog/product/m/i/1250x625/minami-3-seater-sofa-in-blue-colour-by-mintwud-minami-3-seater-sofa-in-blue-colour-by-mintwud-exjose.jpg",
                     "https://ii2.pepperfry.com/media/catalog/product/m/i/1250x625/minami-3-seater-sofa-in-blue-colour-by-mintwud-minami-3-seater-sofa-in-blue-colour-by-mintwud-5bq7co.jpg",
                     "https://ii1.pepperfry.com/media/catalog/product/m/i/1250x625/minami-3-seater-sofa-in-blue-colour---mintwud-by-pepperfry-minami-3-seater-sofa-in-blue-colour---min-8t8x22.jpg"]
         },
         {
             "id":"10",
             "name":"Daisuke 3 Seater Sofa In Grey Colour",
             "category":"sofa",
             "brand":"Mintwud from Pepperfry",
             "price":"15,999",
             "color":"Grey",
             "weight":"22.5 KG",
             "material":"Rubber Wood",
             "dimension":["81.28","157.48","76.2"],
             "assembly":"Carpenter Assembly",
             "warranty":"36",
             "sku":"FN1759259-P-WH5056",
             "description":"Mintwud was conceptualized for compact homes which demand intelligent designs for small spaces, befitting modern lifestyles. Reusing resources has always underlined the very philosophy and every design is made with the best engineered wood, quality checked for accurate dimensions, sturdiness and finish.",
             "seller":"https://ii1.pepperfry.com/supplierpng/da4609255b9503ff3d95b27077f0164e.png?_v=22",
             "images":["https://ii1.pepperfry.com/media/catalog/product/d/a/1250x625/daisuke-3-seater-sofa-in-brown-colour-by-mintwud-daisuke-3-seater-sofa-in-brown-colour-by-mintwud-65nxmz.jpg",
                     "https://ii2.pepperfry.com/media/catalog/product/d/a/1250x625/daisuke-3-seater-sofa-in-brown-colour-by-mintwud-daisuke-3-seater-sofa-in-brown-colour-by-mintwud-gcs0wt.jpg",
                     "https://ii2.pepperfry.com/media/catalog/product/d/a/1250x625/daisuke-3-seater-sofa-in-brown-colour-by-mintwud-daisuke-3-seater-sofa-in-brown-colour-by-mintwud-c3tjue.jpg"]
         },
         
       
           {
               "id":"11",
               
               "name":"Original 3-Layered Orthopedic 6 inch Memory Foam King Size Mattress",
       
               "category":"mattresses",
               
               "brand":"SleepyCat",
               
               "price":"₹13,119 ",
               
               "weight":"26 KG",
               
       
       
               "description":"An Ortho mattress suitable for all types of sleepers, that provides the ideal balance between comfort and support with Open-cell Memory Foam & High Density Base.",
       
               
               
               "images":"https://ii2.pepperfry.com/media/catalog/product/o/…tress-by-sleepycat-original-3-layered--rgrsji.jpg"
            },
       
       
           {
               "id":"12",
               
               "name":"Ortho Plus 6 inch Memory Foam King Size Mattress",
       
               "category":"mattresses",
               
               "brand":"SleepX",
               
               "price":"₹12,533",
               
               "color":"Pink",
               
               "weight":"20 KG", 
       
               "description":"An Ortho mattress suitable for all types of sleepers, that provides the ideal balance between comfort and support with Open-cell Memory Foam & High Density Base.",    
                   
               "images":"https://ii3.pepperfry.com/media/catalog/product/o/…free-pillow-by-sleepx-ortho-plus-quilt-es8ocv.jpg"
           
           },
       
       
           {
               "id":"13",
               
               "name":"Original 3-Layered Orthopedic 6 inch Memory Foam King Size Mattress",
       
               "category":"mattresses",
               
               "brand":"Sleepyhead",
               
               "price":"₹13,499 ",
               
               "weight":"26 KG",
               
               "description":"An Ortho mattress suitable for all types of sleepers, that provides the ideal balance between comfort and support with Open-cell Memory Foam & High Density Base.",
         
               "images":"https://ii2.pepperfry.com/media/catalog/product/o/…d-original-3-layered-foam-6-inch-king--temlar.jpg"
            },
       
            {
               "id":"14",
               
               "name":"Dual Comfort 5 inch HR Foam King Size Mattress in Orange Colour",
       
               "category":"mattresses",
               
               "brand":"SleepX",
               
               "price":"₹9,119 ",
               
               "weight":"30 KG",
       
               "description":"An Ortho mattress suitable for all types of sleepers, that provides the ideal balance between comfort and support with Open-cell Memory Foam & High Density Base.",
       
                 
               "images":"https://ii3.pepperfry.com/media/catalog/product/d/…king-size-mattress-with-free-pillow-by-al4hwo.jpg"
            },
       
            {
               "id":"15",
               
               "name":"Livein Essential Orthopedic 6 inch Memory Foam King Size Mattress",
       
               "category":"mattresses",
               
               "brand":"Duroflex",
               
               "price":"₹14,879 ",
               
               "weight":"15 KG",
               
       
       
               "description":"An Ortho mattress suitable for all types of sleepers, that provides the ideal balance between comfort and support with Open-cell Memory Foam & High Density Base.",
       
               
               
               "images":"https://ii1.pepperfry.com/media/catalog/product/l/…ess--with-1-free-bedsheet--in-white-co-hpbym9.jpg"
            },
       
            {
               "id":"16",
               
               "name":"Dual Comfort 6 inch HR Foam King Size Mattress in Orange Colour",
       
               "category":"mattresses",
               
               "brand":"SleepX",
               
               "price":"₹10,119 ",
               
               "weight":"20 KG",
               
       
       
               "description":"An Ortho mattress suitable for all types of sleepers, that provides the ideal balance between comfort and support with Open-cell Memory Foam & High Density Base.",
       
               
               
               "images":"https://ii2.pepperfry.com/media/catalog/product/d/…king-size-mattress-with-free-pillow-by-bttm4w.jpg"
            },
       
            {
               "id":"17",
               
               "name":"Original 3-Layered Orthopedic 8 inch Open Cell Memory Foam King Size Mattress",
       
               "category":"mattresses",
               
               "brand":"SleepyCat",
               
               "price":"₹16,899 ",
               
               "weight":"10 KG",
               
       
       
               "description":"An Ortho mattress suitable for all types of sleepers, that provides the ideal balance between comfort and support with Open-cell Memory Foam & High Density Base.",
       
               
               
               "images":"https://ii3.pepperfry.com/media/catalog/product/o/…-king-size-mattress--by-sleepycat-orig-wgfbt3.jpg"
            },
       
            {
               "id":"18",
               
               "name":"Royal Orthopedic 6 inch Pocketed Spring King Size Mattress with Zero Partner Disturbance in White Colour",
       
               "category":"mattresses",
               
               "brand":"Comforto",
               
               "price":"₹14,119 ",
               
               "weight":"18 KG",
               
       
       
               "description":"An Ortho mattress suitable for all types of sleepers, that provides the ideal balance between comfort and support with Open-cell Memory Foam & High Density Base.",
       
               
               
               "images":"https://ii1.pepperfry.com/media/catalog/product/r/…size-mattress-by-comforto-royal-coil-p-prpju1.jpg"
            },
       
            {
               "id":"19",
               
               "name":"Ortho SmartGrid 8 inch HR Foam King Size Mattress with Grid Layer",
       
               "category":"mattresses",
               
               "brand":"The Sleep Company",
               
               "price":"₹25,119 ",
               
               "weight":"26 KG",
               
       
       
               "description":"An Ortho mattress suitable for all types of sleepers, that provides the ideal balance between comfort and support with Open-cell Memory Foam & High Density Base.",
       
               
               
               "images":"https://ii3.pepperfry.com/media/catalog/product/o/…yer-ortho-smartgrid-8-inch-hr-foam-kin-cegrk7.jpg"
            },
       
            {
               "id":"20",
               
               "name":"Sense BodyIQ 8 inch Memory Foam King Size Mattress",
               
               "category":"mattresses",
       
               "brand":"Sleepyhead",
               
               "price":"₹16,119 ",
               
               "weight":"26 KG",
               
       
       
               "description":"An Ortho mattress suitable for all types of sleepers, that provides the ideal balance between comfort and support with Open-cell Memory Foam & High Density Base.",
       
               
               
               "images":"https://ii3.pepperfry.com/media/catalog/product/s/…s-in-white-colour-by-sleepyhead-sense--yuwusr.jpg"
            },
       
            {
               "id":"21",
               
               "name":"Hybrid 8 inch Pocketed Spring King Size Mattress",
       
               "category":"mattresses",
               
               "brand":"Springtek",
               
               "price":"₹25,969",
               
               "weight":"26 KG",
               
       
       
               "description":"An Ortho mattress suitable for all types of sleepers, that provides the ideal balance between comfort and support with Open-cell Memory Foam & High Density Base.",
       
               
               
               "images":"https://ii3.pepperfry.com/media/catalog/product/h/…-by-springtek-hybrid-pocket-spring---n-xjivnx.jpg"
            },
       
       
            {
               "id":"22",
               
               "name":"Hybrid Orthopedic 6 inch Pocketed Spring King Size Mattress in White Colour",
       
               "category":"mattresses",
               
               "brand":"Loom & Needles",
               
               "price":"₹20,119 ",
               
               "weight":"26 KG",
               
       
       
               "description":"An Ortho mattress suitable for all types of sleepers, that provides the ideal balance between comfort and support with Open-cell Memory Foam & High Density Base.",
       
               
               
               "images":"https://ii1.pepperfry.com/media/catalog/product/h/…edles-hybrid-latex-mattress-6-inches-k-4kuaxz.jpg"
            },
       
            {
               "id":"23",
               
               "name":"Dreamer 8 inch HR Foam King Size Mattress",
       
               "category":"mattresses",
               
               "brand":"The Sleep Company",
               
               "price":"₹65,119 ",
               
               "weight":"26 KG",
               
       
       
               "description":"An Ortho mattress suitable for all types of sleepers, that provides the ideal balance between comfort and support with Open-cell Memory Foam & High Density Base.",
       
               
               
               "images":"https://ii1.pepperfry.com/media/catalog/product/h/…edles-hybrid-latex-mattress-6-inches-k-4kuaxz.jpg"
            },
       
            {
               "id":"24",
               
               "name":"Pearl 6 inch Bonnell Spring King Size Mattress (with 2 Free Pillows)",
       
               "category":"mattresses",
               
               "brand":"Gilson",
               
               "price":"₹20,119 ",
               
               "weight":"26 KG",
               
       
       
               "description":"An Ortho mattress suitable for all types of sleepers, that provides the ideal balance between comfort and support with Open-cell Memory Foam & High Density Base.",
       
               
               
               "images":"https://ii1.pepperfry.com/media/catalog/product/p/…ss-with-free-pillow-by-gilson-pearl-bo-iitn1g.jpg"
            },
       
            {
               "id":"25",
               
               "name":"Sense BodyIQ 6 inch Memory Foam King Size Mattress",
       
               "category":"mattresses",
               
               "brand":"Sleepyhead",
               
               "price":"₹19,119 ",
               
               "weight":"26 KG",
               
       
       
               "description":"An Ortho mattress suitable for all types of sleepers, that provides the ideal balance between comfort and support with Open-cell Memory Foam & High Density Base.",
       
               
               
               "images":"https://ii1.pepperfry.com/media/catalog/product/s/…s-in-white-colour-by-sleepyhead-sense--nmr08u.jpg"
            }
       
       ]
      
let api=`https://sanju01sahu.github.io/fluffy-potato/db.json`
       async function fetchData(){
          try{
                let response=await fetch(api);
                let data=await response.json();
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
  let productTotal=document.getElementById("AV-productTotal");
  productTotal.innerText=`TOTAL :${allproductdataAV.length}`;
  function disaplayDATA(data){   
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
    imageAV.src=e.images;
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


  disaplayDATA(allproductdataAV);
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
