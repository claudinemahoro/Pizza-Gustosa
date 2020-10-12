$(document).ready(function(){

  //business logic
  $("#summary").hide();
  $("#porto4").hide();
  $("#porto5").hide();
  $("#porto6").hide();
  function Pizza(crust,topping,size,cost){
    this.pizzaCrust=crust;
    this.pizzaTopping=topping;
    this.pizzaSize=size;
  }
  Pizza.prototype.yourPizza=function(){
    return "You ordered a "+this.pizzaSize+" pizza, with "+this.pizzaCrust+" crust"+" and "+this.pizzaTopping+" for topping."
  }
  function PizzaCost(crustCost,toppingCost,sizeCost){
    this.CostPerCrust=crustCost;
    this.CostPerTopping=toppingCost;
    this.CostPerSize=sizeCost;
  }
  PizzaCost.prototype.CostOfOne=function(){
    return this.CostPerCrust+this.CostPerTopping+this.CostPerSize
  }
  //user interface logic

$("#cost").click(function(event){
event.preventDefault();
  var selectedCrust= $("#crust").val();
  var selectedTopping= $("#topping").val();
  var selectedSize= $("#size").val();
  var numberOfPizza=$("#quantity").val();

switch(selectedCrust){
  case"Flat Bread":
  var costOfCrust=300;
  break;
  case"Cracker":
  var costOfCrust=250;
  break;
  case"Greek":
  var costOfCrust=300;
  break;
  case"Focaccia":
  var costOfCrust=350;
  break;
  case"Thin":
  var costOfCrust=250;
  break;
}
switch(selectedTopping){
  case"Beef":
  var costOfTopping=400;
  break;
  case"Sausage":
  var costOfTopping=450;
  break;
  case"Ham":
  var costOfTopping=450;
  break;
  case"Chicken":
  var costOfTopping=500;
  break;
  case"Onions":
  var costOfTopping=350;
  break;
}
switch(selectedSize){
  case"Small":
  var costOfSize=700;
  break;
  case"Medium":
  var costOfSize=1000;
  break;
  case"Large":
  var costOfSize=1200;
  break;
}
  
  var selectedPizzaCost=new PizzaCost(costOfCrust,costOfTopping,costOfSize);
  var selectedPizza=new Pizza(selectedCrust,selectedTopping,selectedSize);
  document.getElementById("priceOne").textContent =selectedPizzaCost.CostOfOne()+" Rwf.";
  document.getElementById("seePrice").textContent = selectedPizzaCost.CostOfOne()*numberOfPizza+" Rwf.";

  document.getElementById("cru").textContent =selectedCrust;
  document.getElementById("si").textContent =selectedSize;
  document.getElementById("top").textContent =selectedTopping;
  document.getElementById("nbr").textContent =numberOfPizza;
  document.getElementById("cos").textContent = selectedPizzaCost.CostOfOne()*numberOfPizza+" Rwf.";

$("#deliver").click(function(event){
  event.preventDefault();
  var location=prompt("Enter the location for deliver:");
  alert("Your order will be delivered to "+location+", a delivery cost of 1000Rwf will be added to the total cost.");
});
$("#dontDeliver").click(function(event){
  event.preventDefault();
  alert("Make sure you pick your order!");
});
  
});
$("#checkout").click(function(event){
  event.preventDefault();
  alert("Order received.")
  $("#summary").show();
}); 

$("#img4").hover(function(){
  $(this).animate({opacity: .8}, 100);
  $("#porto4").fadeIn();
},
function(){
  $(this).stop().animate({opacity:1}, 400);
  $("#porto4").fadeOut();
});
$("#img5").hover(function(){
  $(this).animate({opacity: .8}, 100);
  $("#porto5").fadeIn();
},
function(){
  $(this).stop().animate({opacity:1}, 400);
  $("#porto5").fadeOut();
});
$("#img6").hover(function(){
  $(this).animate({opacity: .8}, 100);
  $("#porto6").fadeIn();
},
function(){
  $(this).stop().animate({opacity:1}, 400);
  $("#porto6").fadeOut();
});
});
