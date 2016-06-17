// Frontend Logic
$(document).ready(function(){
  $("#smallPizza").click(function(){
    $("#modalTitle").text("");
    $("#modalTitle").append("<h4><input type='hidden' id='pizzaPrice' value='4'>Small Pizza</input></h4>");
  });
  $("#medPizza").click(function(){
    $("#modalTitle").text("");
    $("#modalTitle").append("<h4><input type='hidden' id='pizzaPrice' value='8'>Medium Pizza</input></h4>");
  });
  $("#lgPizza").click(function(){
    $("#modalTitle").text("");
    $("#modalTitle").append("<h4><input type='hidden' id='pizzaPrice' value='10'>Large Pizza</input></h4>");
  });
  $(".purchasePizza").click(function() {
    $('.blank')[0].reset();
    $("#priceForPizza").text("");
  });
  $("#getPrice").click(function(){
    var crustType = parseInt($("input:radio[name='optradio']:checked").val());
    var toppings = parseInt($("#dropdown option:selected").val());
    var sizeVal = parseInt($("#pizzaPrice").val());
    var orderTotal = new pizzaType(sizeVal, toppings, crustType);
    $("#priceForPizza").text(orderTotal.pizzaPrice());
    event.preventDefault();
  });
})
// Backend Logic

function pizzaType(sizeVal, toppings, crustType) {
  this.pizzaSize = sizeVal;
  this.toppings = toppings;
  this.crust = crustType;
}

pizzaType.prototype.pizzaPrice = function(){
  return this.pizzaSize + this.toppings + this.crust;
}
