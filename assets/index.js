// meniu
let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');

}

//slider
let swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true,
  });

  let products = {
      data:[
          {
          productName:"Adidas Avantage",
          category:"Adidas",
          price:"60",
          image:"/assets/img/Adidas Avantage 1200.PNG",
      },


      {
        productName:"Adidas Bravada",
        category:"Adidas",
        price:"70",
        image:"/assets/img/Adidas Bravada 1400.PNG",
    },


    {
        productName:"Adidas Courtsmash",
        category:"Adidas",
        price:"70",
        image:"/assets/img/Adidas Courtsmash Classic 1400 .PNG",
    },


    {
        productName:"Adidas Postmode",
        category:"Adidas",
        price:"90",
        image:"/assets/img/Adidas Postmode 1800.PNG",
    },


    {
        productName:"Nike Revolution 6",
        category:"Nike",
        price:"80",
        image:"/assets/img/Nike Revolution 6 1600.PNG",
    },


    {
        productName:"Nike Tanjun",
        category:"Nike",
        price:"70",
        image:"/assets/img/Nike Tanjun 1400.PNG",
    },


    {
        productName:"Nike Air 2",
        category:"Nike",
        price:"55",
        image:"/assets/img/Nike Tanjun 1400.PNG",
    },


    {
        productName:"Rebook Air 2",
        category:"Rebook",
        price:"55",
        image:"/assets/img/Adidas Avantage 1200.PNG",
    },
    {
        productName:"Nike Air 2",
        category:"Nike",
        price:"55",
        image:"/assets/img/Adidas Bravada 1400.PNG",
    },


    {
      productName:"Nike Air 2",
      category:"Nike",
      price:"55",
      image:"/assets/img/Nike Tanjun 1400.PNG",
  },


  {
      productName:"Nike Air 2",
      category:"Nike",
      price:"55",
      image:"/assets/img/Adidas Courtsmash Classic 1400 .PNG",
  },


  {
      productName:"Adidas Air 2",
      category:"Adidas",
      price:"55",
      image:"/assets/img/Adidas Postmode 1800.PNG",
  },


  {
      productName:"Nike Air 2",
      category:"Nike",
      price:"55",
      image:"/assets/img/Adidas Courtsmash Classic 1400 .PNG",
  },


  {
      productName:"Puma Air 2",
      category:"Puma",
      price:"55",
      image:"/assets/img/Nike Tanjun 1400.PNG",
  },


  {
      productName:"Nike Air 2",
      category:"Nike",
      price:"55",
      image:"/assets/img/Adidas Bravada 1400.PNG",
  },


  {
      productName:"Rebook Air 2",
      category:"Rebook",
      price:"55",
      image:"/assets/img/Nike Revolution 6 1600.PNG",
  },
    ],
  };
//creare produse
  for(let i of products.data){
      let card = document.createElement("div");
      card.classList.add("card", i.category ,);
      let imgContainer = document.createElement("div");
      imgContainer.classList.add("image-container");
      let image = document.createElement("img");
      image.setAttribute("src", i.image);
      imgContainer.appendChild(image);
      card.appendChild(imgContainer);

      let container = document.createElement("div");
      container.classList.add("container");

      let name = document.createElement("h5");
      name.classList.add("product-name");
      name.innerText = i.productName.toUpperCase();
      container.appendChild(name);

      let price = document.createElement("h6");
      price.innerText = i.price +" Euro";
      container.appendChild(price);


      let newlink = document.createElement('a');
      newlink.setAttribute('class', 'fas fa-shopping-basket shop');
      newlink.setAttribute('href', '#order');
      container.appendChild(newlink);
      
      

      card.appendChild(container);
      document.getElementById("productss").appendChild(card);
  }
////fitru

function filterProduct(value){
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button)=>{
        if(value.toUpperCase() == button.innerText.toUpperCase()){
            button.classList.add("active");
        }else{
            button.classList.remove("active");
        }
        let elements = document.querySelectorAll(".card");
        elements.forEach((element)=>{
            if(value == "all"){
                element.classList.remove("hide");
            }else{
                if(element.classList.contains(value)){
                    element.classList.remove("hide");
                }else{
                    element.classList.add("hide")
                }
            }
        });

    });
}


  window.onload = () =>{
      filterProduct(all);
  }



  //search

  document.getElementById("search").addEventListener("click",()=>{
      let searchInput = document.getElementById("search-input").value;
      let elements = document.querySelectorAll(".product-name");
      let cards = document.querySelectorAll(".card");

      elements.forEach((element,index)=>{
          if(element.innerText.includes(searchInput.toUpperCase())){
              cards[index].classList.remove("hide");
          }
          else{
              cards[index].classList.add("hide");
          }
      })
  })