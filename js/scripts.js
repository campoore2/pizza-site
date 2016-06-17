// Frontend Logic
$(document).ready(function(){
  $("#smallPizza").click(function(){
    $("#modalTitle").text("");
    $("#modalTitle").append("<h4><input type='hidden' id='pizzaPrice' value='2'>Small Pizza</input></h4>")
  })
  event.preventDefault();
})
