$(document).ready(function() {
//*===(Variables/Functions)===*
//random number
var magicNum = Math.floor((Math.random()*100)+1);
//random number generator
var newGame = function () {
	var magicNum = Math.floor((Math.random()*100)+1);
	console.log("The Magic Number is " + magicNum);
	return magicNum;
};
//user input value
var userInput = function() {
	return $("#userGuess").val();
};
//Set focus to the user input box
var inputFocus = function () {
	document.getElementById("userGuess").focus();
};
// for resetting the input after user entry
var inputReset = function () {
	$("#userGuess").val("");
};
//clears the guess list after each game
var listClear = function () {
	$("#guessList").empty();
};
//feedback variable
var feedbackStart = $("#feedback").html();
//resets feedback after each game
var feedbackReset = function () {
	$("#feedback").html(feedbackStart);
};
//change feedback text
var setFeedback = function () {
	$("#feedback").text();
};
//sets count to increase by 1 after each guess
var counter = function () {
	$("#count").html(function(i, val) {
		return +val+1;
	});
};
//countStart variable
var countStart = $("#count").html();
//resets the counter after each game
var countReset = function() {
	$("#count").html(countStart);
};
//difference between the userGuess and the magicNum
var feedbackNum = function () {
	$(userInput() - magicNum).val();
	console.log(val());
	return val();
};
//check if user input meets all the rules
var inputAlert = function () {
	if(userInput() != "" && $.isNumeric(userInput()) && userInput() % 1 == 0) {
	} else if (userInput() < 1 || userInput() > 100) {
	} else {
		setFeedback("Please enter a whole number between 1 - 100 to play.");
	}
};
//INITIAL PAGE LOAD/REFRESH--pick random number to start game and print out that number in the console.  Focus on the user input.
newGame();
inputFocus();
//WHAT button- when clicked; display information modal box
$(".what").click(function() {
	$(".overlay").fadeIn(1000);
});
//Hide information modal box
$("a.close").click(function() {
	$(".overlay").fadeOut(1000);
});
// NEW GAME button when clicked; start a new game by generating a new random number will get chosen (1-100)
$(".new").click(function() {
	newGame();
	listClear();
	feedbackReset();
	countReset();
});//end new game click event

// when user enters number and presses enter, the guess counter should increase by 1, userGuess should be printed out below in guessBox and #feedback should be printed to let the user know if his guess was too high/low etc.
$("#guessButton").click(function(e) {
	e.preventDefault();
	$("#guessList").append("<li>" + userInput() + "</li>");
	counter();
	inputReset();
	inputFocus();
	feedbackNum();
	inputAlert();
});// end user guess click event

});//end of document ready event