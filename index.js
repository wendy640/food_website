var baseurl = "https://asm-dev-api.herokuapp.com/api/v1/food#";
function loadMeals() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET",baseurl ,true);
    xmlhttp.onreadystatechange = function(){
        if (xmlhttp.readyState=== 4 && xmlhttp.status === 200) {
            var foodData = JSON.parse(xmlhttp.responseText);
            //console.log(foodData);
            
           // var ul = $("<ul>");
            $.each(foodData.data.meals, function (index, value) {
                console.log(index,value);
                if(index=== 0){
                     $('.card').find("#myImg1").attr(
                       "src",
                       value.strMealThumb
                     );
                     
                      $(".card").find("#foodinfo1").text(value.strMeal);
                      $(".card").find("#price1").text(value.price);
                      $('.card').find("#title1").text(value.title);
                      $('.card').find("#desc1").text(value.description);
                      switch (value.ratings) {
                        case 1:
                           $(".card").find("#1star").removeAttr("hidden");
                          break;
                        case 2:
                           $(".card").find("#1star").removeAttr("hidden");
                           $(".card").find("#2star").removeAttr("hidden");
                          break;
                        case 3:
                           $(".card").find("#1star").removeAttr("hidden");
                           $(".card").find("#2star").removeAttr("hidden");
                           $(".card").find("#3star").removeAttr("hidden");
                          break;
                        case 4:
                           $(".card").find("#1star").removeAttr("hidden");
                           $(".card").find("#2star").removeAttr("hidden");
                           $('.card').find("#3star").removeAttr("hidden");
                           $('.card').find("#4star").removeAttr("hidden");
                          break;
                        case 5:
                          $('.card').find("#1star").removeAttr("hidden");
                          $('.card').find("#2star").removeAttr("hidden");
                          $('.card').find("#3star").removeAttr("hidden");
                          $('.card').find("#4star").removeAttr("hidden");
                          $('.card').find("#5star").removeAttr("hidden");
                          break;
                        default:
                          break;
                      }
                }else{
 
                // }
                var DetailCloned = $(".card").first().clone();
                DetailCloned.find("#myImg1").attr("src", value.strMealThumb);
                DetailCloned.find("#foodinfo1").text(value.strMeal);
                DetailCloned.find("#price1").text(value.price);
                DetailCloned.find("#title1").text(value.title);
                // DetailCloned.find("#rating1").text(value.ratings);
                DetailCloned.find("#desc1").text(value.description);
                switch (value.ratings) {
                    case 1:
                         DetailCloned.find("#1star").removeAttr("hidden");
                        break;
                    case 2:

                        DetailCloned.find("#1star").removeAttr("hidden");
                        DetailCloned.find("#2star").removeAttr("hidden");
                        break;
                    case 3:
                        DetailCloned.find("#1star").removeAttr("hidden");
                        DetailCloned.find("#2star").removeAttr("hidden");
                        DetailCloned.find("#3star").removeAttr("hidden");
                        break;
                    case 4: 
                        DetailCloned.find("#1star").removeAttr("hidden");
                        DetailCloned.find("#2star").removeAttr("hidden");
                        DetailCloned.find("#3star").removeAttr("hidden");
                        DetailCloned.find("#4star").removeAttr("hidden");
                        break;
                    case 5:
                        DetailCloned.find("#1star").removeAttr("hidden");
                          DetailCloned.find("#2star").removeAttr("hidden");
                          DetailCloned.find("#3star").removeAttr("hidden");
                          DetailCloned.find("#4star").removeAttr("hidden");
                      DetailCloned.find("#5star").removeAttr("hidden");
                      break;
                    default:
                        break;
                }
            }
                
            $(".card-container").append(DetailCloned);
            });
             
        }
    };
    xmlhttp.send();
}
window.onload = function () {
    loadMeals();
}

function myFunction() {
//     var minus = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash-lg" viewBox="0 0 16 16">
//     <path d="M0 8a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1z"/>
//   </svg>;
    // document.getElementById("desc1").style.overflow="visible";
    // document.getElementById("desc1").style.height="auto";
    // document.getElementById("button").innerHTML = minus;
    
}
