$(document).ready(function(){
  $.ajax({
    type: "GET",
    url: "http://159.65.21.42:9000/products",
    success: function(response) {
      $(response).each(function(i, data) {
        if(data.category == "createlove") {
          let allResult = `
          <div class="cont2-div2">
          <a href="product.html?id=${data._id}">
          <img src="http://159.65.21.42:9000${data.image}" alt="">
          <div class="cont2-innerd1">
            <a href=""><p class="neww-p">${data.name}</p></a>
  
            <div class="svg-div1">
              <div class="svg-divv">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M7.99998 13.0852L3.28889 15.4762C3.18255 15.5302 3.05189 15.4891 2.99706 15.3844C2.97577 15.3438 2.96832 15.2975 2.97581 15.2523L3.83017 10.103L0.064192 6.43136C-0.0208179 6.34848 -0.0214783 6.21346 0.062717 6.12978C0.0954128 6.09728 0.137856 6.07599 0.183781 6.06906L5.4229 5.27766L7.80648 0.617401C7.86029 0.512205 7.99054 0.469862 8.09741 0.522826C8.13891 0.543393 8.17259 0.57655 8.19349 0.617401L10.5771 5.27766L15.8162 6.06906C15.9345 6.08692 16.0156 6.19578 15.9975 6.31219C15.9904 6.3574 15.9688 6.39918 15.9358 6.43136L12.1698 10.103L13.0242 15.2523C13.0434 15.3686 12.9634 15.4782 12.8453 15.4972C12.7994 15.5045 12.7524 15.4972 12.7111 15.4762L7.99998 13.0852Z"
                    fill="#e91616"></path>
                </svg>
                <p class="svg-innerd1">5.0(3)</p>
  
              </div>
              <p class="svg-innerd2">${data.price}</p>
            </div>
            <div class="circle-cont">
              <div class="circle-div">
  
              </div>
              <div class="circle-div2">
  
              </div>
              <div class="circle-div0">
  
              </div>
              <div class="circle-div01">
  
              </div>
              <div class="circle-div02">
  
              </div>
            </div>
            </a>
          </div>
        </div>`
          $(".container-of-divs").append(allResult)
        }
      })
    }
  })

})