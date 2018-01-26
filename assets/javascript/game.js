// Variables/Functions:
var wins = 0; // # of times user has collected points from the crystals to equal the goal
var losses = 0; // # of times the user has exceeded the goal amount
var userScore = 0; // summation of points from the clicked crystals
var computerRandNum; // app generated random number that will be the goal
var crystalValues = []; // will contain randomly generated values for each crystal
function reset() {}; // Reset userScore, computerRandNum and crystalValues
function update() {}; // Update wins, losses

// On crystal click:
$(document).ready(function() {
	// What crystal clicked? ---> store in a variable
		// store crystal value in variable
	// add crystalClickedValue to user total score
	$(".gems").click(function() {
		userScore += crystalValues[$(".id")]
		// Call update function
		update();
	})

		
	// Check if win (userTotalScore === computerRandomNumber)
	if (userScore === computerRandNum) {
		// Add 1 to wins
		wins++;
		// reset function
		reset();
		// Call update function
		update();
	}
		
	// If lose (userTotalScore > computerRandNum)
	if (userScore > computerRandNum) {
		// Add 1 to losses
		losses++;
		// reset function
		reset();
		// Call update function
		update();
	}
		
	// Reset function
	reset() {
		// total score = 0
		userScore = 0;
		// new random array of crystal values
		for (var i = 0; i < crystalValues.length; i++) {
			crystalValues[i] = Math.floor(Math.random()*(120-19)+19);
		}
		// new compRandNum
		computerRanNum = Math.floor(Math.random()*12) + 1;
	}
		
	// Updating HTML
	update () {
		// wins
		// losses		
		$("#win_losses").html("<h2>Wins: " + wins + "</h2> <h2>Losses: " + losses + "</h2>");
		// total score
		$("#score").html("Score:<br>" + score);
	}
		
});
}
