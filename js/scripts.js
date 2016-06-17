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
  event.preventDefault();
})
