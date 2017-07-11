
//variables
var randomNum;
var crystal1;
var crystal2;
var crystal3;
var crystal4;
var selectedNum;
var score = 0;
var wins = 0;
var losses = 0;

//at start of the game
$("#score").html(score);
//random number is generated
var randomNum = Math.floor((Math.random() * 101) + 19);
console.log(randomNum);
$("#randomNum").html(randomNum);

//random crystals generated
var crystal1 = Math.floor((Math.random() * 12) + 1);
console.log("Crystal 1 is worth " + crystal1);


var crystal2 = Math.floor((Math.random() * 12) + 1);
console.log("Crystal 2 is worth " + crystal2);


var crystal3 = Math.floor((Math.random() * 12) + 1);
console.log("Crystal 3 is worth " + crystal3);


var crystal4 = Math.floor((Math.random() * 12) + 1);
console.log("Crystal 4 is worth " + crystal4);

//onclicks
$("#crystal1").on("click", function(){
	console.log("Crystal 1 button click works!");
	score += crystal1;
	$("#score").html(score);
});

$("#crystal2").on("click", function(){
	console.log("Crystal 2 button click works!");
	score += crystal2;
	$("#score").html(score);
});

$("#crystal3").on("click", function(){
	console.log("Crystal 3 button click works!");
	score += crystal3;
	$("#score").html(score);
});

$("#crystal4").on("click", function(){
	console.log("Crystal 4 button click works!");
	score += crystal4;
	$("#score").html(score);
});

//wins and losses
//wins
if (score == randomNum) {
	wins ++;
	console.log("You Got it!");
	$("#wins").html("wins: " + wins);
	$("#message").html("You WIN!");
} else {
	console.log("keep going");
}
//losses
if (score > randomNum) {
	losses++;
	console.log(losses);
	$("#losses").html("losses: " + losses);
	$("#message").html("You Lose!");
}