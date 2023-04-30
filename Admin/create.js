$(document).ready(function () {
  $("#button1").on("click", function (e) {
    e.preventDefault();
    let myForm = $("#form")[0];
    let myData = new FormData(myForm)
    


    $.ajax({
      type: "POST",
      url: "http://159.65.21.42:9000/create/product",
      processData: false,
      contentType: false,
      data: myData,
      success: function (response) {
        alert("Just created a product");
        console.log(response);
      },
      error: function (error) {
        console.log(error)
      }
    });
  })
})