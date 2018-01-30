
// TIMER COUNTDOWN //

$(window).on("load", function() {
	var countdownElement = document.getElementById("timer");
	var	seconds = 200; 
	var	second = 1;
	var	interval;

	var interval = setInterval(function() {
		countdownElement.firstChild.data = 'You have ' + (seconds - second) + ' seconds left!';

	/* var display = I want to set the var to = the creation of a span and set display to none
	using.append$('<span></span>').html="Your time is up!"  */

	if (second >= seconds) {
		// var display = $("<span class='timeUp'>");
		// $("display").html("Your time is up!");
		// console.log(display);
	    clearInterval(interval);
	    $("#timer").text("Your time is up!");
	}
	second++;
	}, 1000);

	// if ()

//place all of the questions into an array
	var questionArray = [
	{
		question: "Enter question here.",
		choices: ["opt1", "opt2", "opt3"],
		answer: 1
	},
	{
		question: "Enter question here.",
		choices: ["opt1", "opt2", "opt3"],
		answer: 2
	},
	{
		question: "Enter question here.",
		choices: ["opt1", "opt2", "opt3"],
		answer: 0
	},
	{
		question: "Enter question here.",
		choices: ["opt1", "opt2", "opt3"],
		answer: 2
	},
	{
		question: "Enter question here.",
		choices: ["opt1", "opt2", "opt3"],
		answer: 1
	},

	];	
});

//next steps would be
//add next button onClick function to clear out current question and display next question
//add more questions to the array

/*loadQuestions();*/

/*$("#question").text("hello world");*/

// ('input[type:radio]')
	



