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
	//disable the guess button
	var disableButton = function () {
	document.getElementById("guessButton").disabled = true;
	};
	//re-enable the guess button
	var enableButton = function () {
	document.getElementById("guessButton").disabled = false;
	};
	//(NEW GAME button) =================================
	//when clicked; start a new game by generating a new random number will get chosen (1-100) reset all other features.
	$(".new").click(function() {
		newGame();
		enableButton();
		$("#guessList").empty();//clear guess list
		//resets the counter after each game
		$("#count").text(0);
		//resets feedback after each game
		$(".feedback").text("Make your Guess!");
		//removes appended win instructions
		$(".win").remove();
	});//end new game click event

	//(THE GAME)======================================== guess counter should increase by 1, userGuess should be printed out below in guessBox and #feedback should be printed to let the user know if his guess was too high/low and if it meets all the rules.
	$("#guessButton").click(function(e) {
		e.preventDefault();
		//get user input
		var userInput = parseInt($("#userGuess").val());
		//feedback function
		var setFeedback = function (feedback) {
			$(".feedback").text(feedback);
		};
		//difference between user's guess and magic number
		var difference = Math.abs(userInput - magicNum);
		//check user input to make sure it works
		if(userInput != "" && $.isNumeric(userInput) && userInput % 1 == 0 && userInput >= 1 && userInput <= 100) {
		} else {
			setFeedback("Please enter a whole number between 1 - 100 to play.");
			return false;
		}
		//calculate Hot or Cold
		if(userInput === magicNum) {
			setFeedback("Winner!!! You Guessed The Magic Number!");
			$(".game").append("<h2 class='win'>" + "Click +New Game to Play Again!" + "</h2>");
			disableButton();
		} else {
		} if(difference > 0 && difference <= 5) {
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
		//adds higher or lower feedback after each guess.
		if(userInput > magicNum) {
			$(".hint").remove();
			$(".game").append("<h2 class='hint'>" + "Guess lower!" + "</h2>");
		} else if(userInput < magicNum) {
			$(".hint").remove();
			$(".game").append("<h2 class='hint'>" + "Guess higher!" + "</h2>");
		}	else {
			$(".hint").remove();
		}
		//appends each guess to the guess box
		$("#guessList").append("<li>" + userInput + "</li>");
		//sets count to increase by 1 after each guess
		$("#count").html(function(i, val) {
		return +val+1;
		});
		//reset userInput bar
		$("#userGuess").val("");//reset userInput bar
	});// end user guess click event
//Once Page Loads
newGame();
});//end of document ready event