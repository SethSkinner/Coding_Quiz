/*declaring variables that will needed to be called upon*/
var start = document.querySelector('#start');
var next = document.querySelector('#next');
var questionbox = document.querySelector('#questionbox');
var questiontext = document.querySelector('#question');
var answerButtons = document.querySelector('#answerbtn');
var randomQuestions, questionIndex;
var score = document.querySelector('#gamescore');
var score1 = 1;
var wrong = document.body.wrong
/*adds event listeners to the start and net buttons for controls*/
start.addEventListener('click', startGame);
next.addEventListener('click', () => {
	questionIndex++;
	setNextQuestion();
});
/*a function built to start the game with random questions and hide the start button after it has been clicked*/
function startGame() {
	start.classList.add('hide');
	randomQuestions = questions.sort(() => Math.random() - .5);
	questionIndex = 0;
	questionbox.classList.remove('hide');
	setNextQuestion();
	/*this starts a timer when the first answer is chosen by the user*/
	var timer = setInterval(function() {
		var minutes = Math.floor(time / 60);
		let seconds = time % 60;
		seconds = seconds < 10 ? `0` + seconds : seconds;
		if (time <= 0) {
			clearInterval(timer);
			window.open('highscores.html');
		} else {
			countdownEl.innerHTML = `${minutes}:${seconds}`;
		}
		time -= 1;
	}, 1000);
}
/*variables used in the timer*/
var timeleft = 1;
let time = timeleft * 60;
var countdownEl = document.querySelector("#timer");
/*function that runs to set up for the nest question*/
function setNextQuestion() {
	resetState();
	showQuestion(randomQuestions[questionIndex]);
}
/*function that shows the question in the innerhtml elements of the box* and buttons*/
function showQuestion(question) {
	questiontext.innerText = question.question;
	question.answers.forEach(answer => {
		var button = document.createElement('button');
		button.innerText = answer.text;
		button.classList.add('btn');
		if (answer.correct) {
			button.dataset.correct = answer.correct;
		}
		button.addEventListener('click', selectAnswer);
		answerButtons.appendChild(button);
	});
}

/*function that resets that state of the body so it removes the old question*/
function resetState() {
	clearStatusClass(document.body);
	next.classList.add('hide');
	while (answerButtons.firstChild) {
		answerButtons.removeChild(answerButtons.firstChild);
	}
}
/*this function selects the event target of the user selected button and sets the answers randomly for the page also starts a data-set i need to change css props*/
function selectAnswer(e) {
	var selectedButton = e.target;
	var correct = selectedButton.dataset.correct;
	setStatusClass(answerButtons, correct);
	Array.from(answerButtons.children).forEach(button => {
		setStatusClass(button, button.dataset.correct);
	});
	if (randomQuestions.length > questionIndex + 1) {
		next.classList.remove('hide');
	} else {
		start.innerText = 'Restart';
		start.classList.remove('hide');
	}
}
/*function to check answer and subtract time if its wrong*/
function checkAnswer() {
  if(answer.correct === 'false') {
	timer--;
  }
}
/*this sets elements on the body to body.wrong or body.correct which allows me to style the buttons and let users know if they are right or wrong*/
function setStatusClass(element, correct) {
	clearStatusClass(element);
	if (correct) {
		element.classList.add('correct');
		score.innerHTML = score1++;
	} else {
		element.classList.add('wrong');
	}
}
/*this clears the status from the body*/
function clearStatusClass(element) {
	element.classList.remove('correct');
	element.classList.remove('wrong');
}
/*questionS and answers with true and false values for the asnwers to determine when to change the color of the buttons*/
var questions = [{
	question: 'What is JavaScript?',
	answers: [{
		text: 'a coding language',
		correct: true
	}, {
		text: 'a type of coffee',
		correct: false
	}, {
		text: 'a kind of bug',
		correct: false
	}, {
		text: 'the name of my dog',
		correct: false
	}]
}, {
	question: 'What do we use to select elements on a page with JS?',
	answers: [{
		text: '.querrySelector',
		correct: true
	}, {
		text: '.getElement',
		correct: false
	}, {
		text: '.createElement',
		correct: false
	}, {
		text: '.setClass',
		correct: false
	}]
}, {
	question: 'who invented JavaScript?',
	answers: [{
		text: 'Bill Gates',
		correct: false
	}, {
		text: 'Steve Wozniak',
		correct: false
	}, {
		text: 'Steve Jobs',
		correct: false
	}, {
		text: 'Brendan Eich',
		correct: true
	}]
}, {
	question: 'how do we select elements with querrySelector?',
	answers: [{
		text: '("element-id")',
		correct: false
	}, {
		text: '("#element-id")',
		correct: true
	}, {
		text: '#element-id',
		correct: false
	}, {
		text: 'element-id',
		correct: false
	}]
}, {
	question: 'What can JavaScript be used for?',
	answers: [{
		text: 'walking your dog',
		correct: false
	}, {
		text: 'making a sandwhich',
		correct: false
	}, {
		text: 'building the frame for a webpage',
		correct: true
	}, {
		text: 'buying clothes',
		correct: false
	}]
}, {
	question: 'what do we use to watch for events in Js?',
	answers: [{
		text: '.Math.floor',
		correct: false
	}, {
		text: '.Math.Random',
		correct: false
	}, {
		text: '.Math.ceiling',
		correct: false
	}, {
		text: '.addEventListener',
		correct: true
	}]
}, {
	question: 'how do you change the innertext in JavaScript?',
	answers: [{
		text: '.inner',
		correct: false
	}, {
		text: '.innerText',
		correct: true
	}, {
		text: '.text',
		correct: false
	}, {
		text: '.html',
		correct: false
	}]
}, {
	question: 'How do you add html with JavaScript?',
	answers: [{
		text: '.html',
		correct: false
	}, {
		text: '.inner',
		correct: false
	}, {
		text: '.innerHTML',
		correct: true
	}, {
		text: '.innerhtml',
		correct: false
	}]
}, {
	question: 'how do you change style properties in JS?',
	answers: [{
		text: '.css',
		correct: false
	}, {
		text: '.style',
		correct: false
	}, {
		text: '.cssstyle',
		correct: false
	}, {
		text: '.setAttribute',
		correct: true
	}]
}, {
	question: 'What is JavaScript?',
	answers: [{
		text: '.append',
		correct: true
	}, {
		text: '.child',
		correct: false
	}, {
		text: '.childappened',
		correct: false
	}, {
		text: '',
		correct: false
	}]
}, ];