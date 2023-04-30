



$(document).ready(function () {

  // function for drop down menu-1
  $('.hov-a1').hover(function () {
    $('#drp-cont1').removeClass('hidden');
  });

  $('#drp-cont1').hover(function () {
    $('#drp-cont1').removeClass('hidden');
  }, function () {
    $('#drp-cont1').addClass('hidden');
  });

  // function for drop down menu-2
  $('.hov-a2').hover(function () {
    $('#drp-cont2').removeClass('hidden');
  });

  $('#drp-cont2').hover(function () {
    $('#drp-cont2').removeClass('hidden');
  }, function () {
    $('#drp-cont2').addClass('hidden');
  });

  // function for drop down menu-3
  $('.hov-a3').hover(function () {
    $('#drp-cont3').removeClass('hidden');
  });
  $('#drp-cont3').hover(function () {
    $('#drp-cont3').removeClass('hidden');
  }, function () {
    $('#drp-cont3').addClass('hidden');
  });

  // function for drop down menu-4
  $('.hov-a4').hover(function () {
    $('#drp-cont4').removeClass('hidden');
  });
  $('#drp-cont4').hover(function () {
    $('#drp-cont4').removeClass('hidden');
  }, function () {
    $('#drp-cont4').addClass('hidden');
  });


  // function for drop down menu-4
  $('.hov-a5').hover(function () {
    $('#drp-cont5').removeClass('hidden');
  });
  $('#drp-cont5').hover(function () {
    $('#drp-cont5').removeClass('hidden');
  }, function () {
    $('#drp-cont5').addClass('hidden');
  });




  let url = window.location.search;
  let urlParams = new URLSearchParams(url);
  let id = urlParams.get("id");
  let product={};

  $.ajax({
    type:"GET",
    url: `http://159.65.21.42:9000/product/${id}`,
    success: function (response) {

      product=response;
      let result = ` <div class="cover1-d1">
      <div class="cover1-innerd">
        <img src="./images/51.webp" alt=""> <br>
        <img src="./images/52.webp" alt="">
      </div>


      <div class="svgg-divv1">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#007aff" class="bi bi-arrow-left" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
        </svg>
      </div>
      <div class="cover1-innerd2">
      <img src="http://159.65.21.42:9000${response.image}" alt="">
      </div>

      <div class="svgg-divv2">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#007aff" class="bi bi-arrow-right" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
        </svg>
      </div>
    </div>
    <div class="cover1-d2">

       <div class="coverage">
        <div class="cover1-dp1"><b>${response.name}</b></div>
        <div class="thediv1">
          <div class="fb-d1">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#0085CA" class="bi bi-facebook" viewBox="0 0 16 16">
              <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
            </svg>
          </div>
          <div class="fb-d2">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#0085CA" class="bi bi-twitter" viewBox="0 0 16 16">
              <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
            </svg>
          </div>
        </div>
      </div>


      <p class="dollar5">$${response.price}</p>
      <p class="dollar-p">${response.description}</p>

      <ul class="new-ul1">
        <li>Environmentally friendly tree-free paper <br> with FSC Certification to ensure they meet the highest environmental <br> and social standards.</li>
      </ul>
      <ul class="new-ul">
        <li>32 blank pages</li>
        <li>5.75" x 8.25" (14.6 x 21 cm)</li>
      </ul>


      <div class="innercover2">
        <div class="quantitydiv">
          <div class="pquantity">
            <button class="quantitybtn">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#0085CA" class="bi bi-dash" viewBox="0 0 16 16">
                <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
              </svg>
            </button>
            <input type="text">

            <button class="quantitybtn2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#0085CA" class="bi bi-plus-lg" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
              </svg>
            </button>
          </div>

        </div>
        <div class="buttondiv">
          <a href="cart.html">
            <button id="addme">Add to Cart</button>
          </a>

        </div>
      </div>

      <div class="buttondiv2">
        <button class="detailsbtn">
          <div class="svgbtndiv">
            <svg width="24" class="svgbtn" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="8" fill="#0085CA"></circle><path d="M12.67 13.96v-3.2H9.98v.73h1.63l.31.31v2.16l-.31.31H9.98V15h4.41v-.73h-1.41l-.31-.31zm-1.29-4.78c0 .41.33.74.74.74.44 0 .77-.33.77-.74 0-.44-.33-.77-.77-.77-.41 0-.74.33-.74.77z" fill="white"></path>
            </svg>
          </div>


          <img class="affirm" src="./images/affirm-logo-2.avif" alt="">
          <p class="newbtnp">is available on order $50</p>
        </button>

        <div class="svggdivv2">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
          </svg>
        </div>
      </div>
    </div> `

    $(".cover1").prepend(result)
    },

  });



$(document).on("click", "#addme", function(){

      let found = false;
      // checking if the item is in cart 
      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      if (cart.length > 0) {
        for (let i = 0; i < cart.length; i++) {
          let item = cart[i];
          if (item.id == id) {
            found = true;
            // item.quantity += 1;
            // break;
          }
        }
      }
      if (found) {
        alert("item already exist in cart");
      } else {
        cart.push({ id: product._id,  name:product.name,quantity: 1,price:product.price, image:product.image})
      }
  
      localStorage.setItem("cart", JSON.stringify(cart))
})


  // add to cart function
  // $("#addme").click(function () {


  // });
});
