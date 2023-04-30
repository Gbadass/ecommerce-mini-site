let allproducts = [];  


// total increment function
function getTotalPrice(cart) {

  let totalPrice = 0;
  for (let i = 0; i < cart.length; i++) {
    let id= cart[i].id;
    let item = allData;
  
    totalPrice += (parseInt(item.price) * parseInt(cart[i].quantity));
  }
  $("#subtotal").text("$"+totalPrice+".00");
  $("#estimatedtotal").text("$"+(totalPrice+5));
}



$(document).ready(function () {



  // getting id from local storage
  let cart = JSON.parse(localStorage.getItem("cart"));

 console.log(cart)

  // let url = window.location.search;
  // let urlParams = new URLSearchParams(url);
  // let id = urlParams.get("id");

  // displaying products from local storage


  $(cart).each(function(i, data) {
    allData = data

     let product = `
     <div class="cart-d1" id="${data.id}-remove">
     <div class="divvv">
      <div class="cart-innerd1">
        <img src="http://159.65.21.42:9000${data.image}" alt="">
      </div>
      <div class="cart-innerd2">
        <p class="cartpp1">${data.name}</p>
        <p class="cartpp2">Default <br> Title</p>
        <div>
          <!-- <button class="cartquantitybtn"> -->
            <div class="qtydiv">

        
            <button class="minusbtn" id="${data.id}">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#0085CA" class="bi bi-dash" viewBox="0 0 16 16">
                <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
              </svg>
            </button>
            <span id="quantitySpan">${data.quantity}</span>
            <button class="plusbtn" id="${data.id}">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#0085CA" class="bi bi-plus-lg" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
              </svg>
            </button>
            </div>
          <!-- </button> -->
        </div>
      </div>
      <div class="cart-innerd3">
        <p class="viewsbox">Popular 5! Views</p>
      </div>
      <div class="cart-innerd4">
        <div class="delete-svg">
          <svg id="${data.id}"  class="dButton" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M4.73672 0C4.64001 0 4.54259 0.0324925 4.4688 0.10475C4.39501 0.177008 4.36183 0.272408 4.36183 0.367108V2.13776H0.874889C0.778182 2.13776 0.68076 2.17025 0.606971 2.24251C0.533181 2.31477 0.5 2.41017 0.5 2.50487V3.14031C0.5 3.23501 0.533181 3.33041 0.606971 3.40267C0.68076 3.47492 0.778182 3.50742 0.874889 3.50742H1.6763L2.47855 13.6586C2.48189 13.7663 2.53778 13.8525 2.6026 13.9075C2.66884 13.9637 2.75799 14 2.85328 14H10.9884C11.0837 14 11.1729 13.9637 11.2391 13.9075C11.304 13.8525 11.3598 13.7663 11.3632 13.6586L12.1654 3.50742H13.1251C13.2218 3.50742 13.3192 3.47493 13.393 3.40267C13.4668 3.33041 13.5 3.23501 13.5 3.14031V2.50487C13.5 2.41017 13.4668 2.31477 13.393 2.24251C13.3192 2.17025 13.2218 2.13776 13.1251 2.13776H9.43242V0.367108C9.43242 0.272408 9.39924 0.177008 9.32545 0.10475C9.25166 0.0324925 9.15424 0 9.05753 0H4.73672ZM5.76052 2.12226V1.35416H8.04956V2.12226H5.76052ZM3.76131 12.6148L3.0579 3.49192H10.7362L10.0172 12.6148H3.76131Z" fill="#0085CA"></path>
          </svg>

          <p class="underbin">${data.price}</p>
        </div>
      </div>
      </div>`
      
    $("#card-d1").append(product)
    $("divvv").css("display", 'block')
    $("cart-d2").css("display", "block")
  });
  
     

  });















  $(document).on('click', '.minusbtn', function () {


    // loop to go through and check the id and decrease the quantity
    let tempCart = JSON.parse(localStorage.getItem("cart"))
    for (let i = 0; i < tempCart.length; i++) {
      let item = tempCart[i];
      if (this.id == item.id) {
        item.quantity -= 1; 
        $("#quantitySpan").text(item.quantity);
      }
    }
    getTotalPrice(tempCart);
    localStorage.setItem("cart", JSON.stringify([...tempCart]));
  
   

  });


  $(document).on('click', '.plusbtn', function () {
  
     // loop to go through and check the id and increase the quantity
    let tempCart = JSON.parse(localStorage.getItem("cart"));
    for (let i = 0; i < tempCart.length; i++) {
      let item = tempCart[i];
      if (this.id == item.id) {
        item.quantity += 1;   
        $("#quantitySpan").text(item.quantity);
      }
    }
    getTotalPrice(tempCart);
    localStorage.setItem("cart", JSON.stringify([...tempCart]));
  

  });


  $(document).on('click', '.dButton', function () {
    // to delete the item in cart
    let tempCart = JSON.parse(localStorage.getItem("cart"));

    let cart = tempCart.filter((item) => item.id !== this.id);
    console.log("#"+this.id+"-remove")
    $("#"+this.id+"-remove").remove();
    // getTotalPrice(cart);
    localStorage.setItem("cart", JSON.stringify(cart));
  

  });




  // let productId =$(this).data("id")
  // $.ajax({
  //   type:"DELETE",
  //   url: `http://159.65.21.42:9000/product/${productId}`,
  //   success: function(){
  //     $(this).remove()
  //   }
    
  // });




