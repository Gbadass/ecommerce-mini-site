$(document).ready(function () {


  $("#hamburger").click(function () {
    $(".sidebar").toggle();
  });



  $.ajax({
    type: "GET",
    url: "http://159.65.21.42:9000/products",
    success: function(response) {
      let count = 0;
      let arr = [];
      for(let i = 0; i < response.length && count < 10; i++){
        let data = response[i];
        if(data.category == "createlove") {
          // console.log(data)
          let allResult = `<tr>
          <td>${data._id}</td>
          <td>${data.name}</td>
          <td>${data.category}</td>
          <td>${data.price}</td>
          <td>${data.quantity}</td>
          <td>${data.description}</td>
        </tr>`
          $("tbody").append(allResult);
        
          count++;
          arr.push(data);
        }
      }
      if(arr.length <= 10){
        $(".span3").html(arr.length);
      }
    }
  })



  $.ajax({
    type: "GET",
    url: "http://159.65.21.42:9000/products",
    success: function(response) {

      $(response).each(function(i, data) {
        if(data.category == "createlove") {
          let allResult = `<div class="innercont1-d1">
          <div class="img-divv1">
            <img src="http://159.65.21.42:9000${data.image}" alt="">
            <b>${data.name}</b>
            <p class="newP1">${data.description}</p>
            <p>${data.price}</p>
            <div class="divv-c1">
              <a href="edit.html?id=${data._id}"><button class="edit1">Edit</button><a/>
              <button id="deleteproduct-${data._id}" class="delete1">Delete</button>
            </div>
          </div>
        </div>`
          $(".inner-cover1").append(allResult)

        }
      })

    }
  })

  



})


$(`#deleteproduct-${data._id}`).click( function() {
  // let productId = $(this).attr("id");
  // console.log(productId)

  $.ajax({
    type: "DELETE",
    url: `http://159.65.21.42:9000/products/${productId}`,
    success: function() {

      $(this).closest(".innercont1-d1").remove();

    }
  });


let cart = JSON.parse(localStorage.getItem("cart"))
var totalItems = 0;
if (cart != null) {
  $.each(cart, function(key, value) {
    totalItems += value.quantity;
  });
}
$(".span4").text(totalItems);
});