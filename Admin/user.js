$(document).ready(function(){
  $("#button2").on("click", function(e){
    
    e.preventDefault();
    let myForm = $("#form")[0];
    let myData = new FormData(myForm);

    $.ajax({
      type: "POST",
      url: "http://159.65.21.42:9000/register",
      processData: false,
      contentType: false,
      Data: myData,
      success: function(response) {
        alert("User Created")
        console.log(response);
      },
      error: function (error) {
        console.log(error)
      }
  
    });
  });

});