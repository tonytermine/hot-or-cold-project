$(document).ready(function() {
	//(WHAT button)======================================
	//Instructions- when clicked; display information modal box
	$(".what").click(function() {
		$(".overlay").fadeIn(1000);
	});
	//Hide information modal box
	$("a.close").click(function() {
		$(".overlay").fadeOut(1000);
	});
	//Global Variables===================================
	//random magic number
	var magicNum = Math.floor((Math.random()*100)+1);
	//random number generator and set focus on input
	var newGame = function () {
	magicNum = Math.floor((Math.random()*100)+1);
		console.log("The Magic Number is " + magicNum);
		document.getElementById("userGuess").focus();
	};
	//(NEW GAME button) =================================
	//when clicked; start a new game by generating a new random number will get chosen (1-100) reset all other features.
	$(".new").click(function() {
		newGame();
		$("#guessList").empty();//clear guess list
		//resets the counter after each game
		$("#count").text(0);
		//resets feedback after each game
		$("#feedback").text("Make your Guess!");
	});//end new game click event

	//(THE GAME)======================================== guess counter should increase by 1, userGuess should be printed out below in guessBox and #feedback should be printed to let the user know if his guess was too high/low and if it meets all the rules.
	$("#guessButton").click(function(e) {
		e.preventDefault();
		//get user input
		var userInput = $("#userGuess").val();
		//feedback function
		var setFeedback = function (feedback) {
			$("#feedback").text(feedback);
		};
		//difference between user's guess and magic number
		var difference = Math.abs(userInput - magicNum);
		//calculate Hot or Cold
		if(userInput === magicNum) {
			setFeedback("Winner! You Guessed The Magic Number!");
		} else {
		} if(difference <= 5) {
			setFeedback("On Fire!");
		} else if(difference > 5 && difference <= 10) {
			setFeedback("Getting Hot!");
		} else if(difference > 10 && difference <= 15) {
			setFeedback("Starting to Sweat!");
		} else if(difference > 15 && difference <= 20) {
			setFeedback("Warming up!");
		} else if(difference > 20 && difference <= 35) {
			setFeedback("Room Temp!");
		} else if(difference > 35 && difference <= 40) {
			setFeedback("Starting to Thaw!");
		} else if(difference > 40 && difference <= 50) {
			setFeedback("Ice Cold!");
		} else if (difference > 50) {
			setFeedback("Frozen Solid!");
		}
		$("#guessList").append("<li>" + userInput + "</li>");
		$("#userGuess").val("");//reset userInput bar
		//sets count to increase by 1 after each guess
		$("#count").html(function(i, val) {
			return +val+1;
		});
	});// end user guess click event
//Once Page Loads
newGame();
});//end of document ready event