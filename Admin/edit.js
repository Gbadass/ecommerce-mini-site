$(document).ready(function(){
  let url = window.location.search;
  let urlParams = new URLSearchParams(url);
  let id = urlParams.get("id");
  let product={};
  console.log(id)

  $.ajax({
    type:"GET",
    url: `http://159.65.21.42:9000/product/${id}`,
    success: function (response) {

      product=response;
      let result = `    <div class="inpt-divs">
      <form action="" id="form">
        <label for="">
          Product Name <br>
          <input value="${response.name}" class="pn-inpt" type="text" name="name" placeholder="Enter Product name">
        </label> <br>

        <label for="">
          Category <br>
          <select name="category" id="category-select">
            <option hidden value="Category">category</option>
            <option value="createlove">createlove</option>
          </select>
        </label> <br>

        <div class="two-labels">
          <label for="price">
            Price<br>
            <input value="${response.price}" class="pn-inpt1" name="price" type="text" placeholder="Price">
          </label> <br>


          <!-- <div class="select-div">
            <select class="select1" name="Currency" id="">
              <option hidden value="Currency">Currency</option>
              <option value="USD">USD</option>
              <option value="NGN">NGN</option>
            </select>
          </div> -->

        </div>


        <label for="">
          Quantity<br>
          <input class="pn-inpt" value="${response.quantity}" type="text" name="quantity" placeholder="Enter Quantity">
        </label> <br>



        <label for="">
          insert Image <br>
          <input class="pn-inpt" value="${response.image}" name="image" type="file">
        </label> <br>

        <label for="">
          Description<br>
          <textarea name="description" id="">${response.description}</textarea>
        </label> <br>
        <button class="submit-btn" id="button1">Create</button>
      </form>
    </div> `

    $(".product-cont").prepend(result)
    },

  });
});