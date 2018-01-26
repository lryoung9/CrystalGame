// Variables/Functions:
var wins = 0; // # of times user has collected points from the crystals to equal the goal
var losses = 0; // # of times the user has exceeded the goal amount
var userScore = 0; // summation of points from the clicked crystals
var computerRandNum; // app generated random number that will be the goal
var crystalValues = [0, 0, 0, 0]; // will contain randomly generated values for each crystal
for (var i = 0; i < crystalValues.length; i++) {
		crystalValues[i] = (Math.floor(Math.random()*12)) + 1;
	};
// Reset userScore, computerRandNum and crystalValues
function reset() {
	// total score = 0
	userScore = 0;
	// new random array of crystal values
	for (var i = 0; i < crystalValues.length; i++) {
		crystalValues[i] = (Math.floor(Math.random()*12)) + 1;
	};
	console.log(crystalValues);
	// new compRandNum
	computerRandNum = Math.floor(Math.random()*(120-19)+19);
	console.log(computerRandNum);
	$("#goal").html("<h2>Goal:<br>" + computerRandNum + "</h2>");
};
// Update html with wins, losses and score
function update() {
	// wins
	// losses		
	$("#win_losses").html("<h2>Wins: " + wins + "</h2> <h2>Losses: " + losses + "</h2>");
	// total score
	$("#score").html("<h2>Score:<br>" + userScore + "</h2>");
};
// Check if win or lose
function endCondition() {
	if (userScore === computerRandNum) {
		// Add 1 to wins
		wins++;
		// reset function
		reset();
		// Call update function
		update();
	} else if (userScore > computerRandNum) {
		// Add 1 to losses
		losses++;
		// reset function
		reset();
		// Call update function
		update();
	}
}

$(document).ready(function() {
	console.log('userScore: ' + userScore);
	console.log('computerRandNum: ' + computerRandNum)
	reset();
	update();
	// Check if win (userTotalScore === computerRandomNumber)
	if (userScore === computerRandNum) {
		// Add 1 to wins
		wins++;
		// reset function
		reset();
		// Call update function
		update();
	} else if (userScore > computerRandNum) {
		// Add 1 to losses
		losses++;
		// reset function
		reset();
		// Call update function
		update();
	}	else {
		// On crystal click:
		// What crystal clicked? ---> store in a variable
			// store crystal value in variable
		// add crystalClickedValue to user total score
		$("#gem0").click(function() {
			userScore += crystalValues[0];
			// Call update function
			update();
			endCondition();
		});
		$("#gem1").click(function() {
			userScore += crystalValues[1];
			// Call update function
			update();
			endCondition();
		});
		$("#gem2").click(function() {
			userScore += crystalValues[2];
			// Call update function
			update();
			endCondition();
		});
		$("#gem3").click(function() {
			userScore += crystalValues[3];
			// Call update function
			update();
			endCondition();
		});
	};
});