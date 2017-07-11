
//variables
var randomNum;
var crystal1;
var crystal2;
var crystal3;
var crystal4;
var selectedNum;
var score = 0;

//at start of the game
$("#score").html(score);
//random number is generated
var randomNum = Math.floor((Math.random() * 89) + 10);
console.log(randomNum);
$("#randomNum").html(randomNum);

//random crystals generated
var crystal1 = Math.floor((Math.random() * 10) + 1);
console.log("Crystal 1 is worth " + crystal1);


var crystal2 = Math.floor((Math.random() * 10) + 1);
console.log("Crystal 2 is worth " + crystal2);


var crystal3 = Math.floor((Math.random() * 10) + 1);
console.log("Crystal 3 is worth " + crystal3);


var crystal4 = Math.floor((Math.random() * 10) + 1);
console.log("Crystal 4 is worth " + crystal4);

//onclicks
$("#crystal1").on("click", function(){
	console.log("this button click works!");
	score += crystal1;

});
