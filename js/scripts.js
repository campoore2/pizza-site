// Frontend Logic
$(document).ready(function(){
  $("#smallPizza").click(function(){
    $("#modalTitle").text("");
    $("#modalTitle").append("<h4><input type='hidden' id='pizzaPrice' value='1'>Small Pizza</input></h4>");
  });
  $("#medPizza").click(function(){
    $("#modalTitle").text("");
    $("#modalTitle").append("<h4><input type='hidden' id='pizzaPrice' value='2'>Medium Pizza</input></h4>");
  });
  $("#lgPizza").click(function(){
    $("#modalTitle").text("");
    $("#modalTitle").append("<h4><input type='hidden' id='pizzaPrice' value='2'>Large Pizza</input></h4>");
  });
  $(".purchasePizza").click(function() {
    $('.blank')[0].reset();
    $("#priceForPizza").text("");
  });
  $("#getPrice").click(function(){
    var crustType = parseInt($("input:radio[name='optradio']:checked").val());
    var toppings = parseInt($("#dropdown option:selected").val());
    var sizeVal = parseInt($("#pizzaPrice").val());
  })

  event.preventDefault();
})
