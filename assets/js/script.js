var start = document.querySelector('#start');
var next = document.querySelector('#next');
var questionbox = document.querySelector('#questionbox');
var questiontext = document.querySelector('#question');
var answerButtons = document.querySelector('#answerbtn');
var randomQuestions, questionIndex;
var score = document.querySelector('#gamescore');
var score1 = 1;
var body = document.querySelector('#body');

start.addEventListener('click', startGame);
next.addEventListener('click', () => {
  questionIndex++;
  setNextQuestion()
})

function startGame() {
  start.classList.add('hide');
  randomQuestions = questions.sort(() => Math.random() - .5);
  questionIndex = 0;
  questionbox.classList.remove('hide');
  setNextQuestion();
  
  var timer = setInterval(function() {
    var minutes = Math.floor(time/60);
    let seconds = time % 60;
    seconds= seconds <10 ? `0` + seconds : seconds;
  if(time <= 0){
    clearInterval(timer);
    window.open('highscores.html');
  } else {
    countdownEl.innerHTML = `${minutes}:${seconds}`;
  }
  time -= 1;
 }, 1000);
};

var timeleft = 1;
let time = timeleft * 60;
var countdownEl = document.querySelector("#timer");

function setNextQuestion() {
  resetState();
  showQuestion(randomQuestions[questionIndex]);
}

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
  })
}


function resetState() {
  clearStatusClass(document.body);
  next.classList.add('hide');
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  var selectedButton = e.target;
  var correct = selectedButton.dataset.correct;
  setStatusClass(answerButtons, correct);
  Array.from(answerButtons.children).forEach(button => {
    setStatusClass(button, button.dataset.correct);
  })
  if (randomQuestions.length > questionIndex + 1) {
    next.classList.remove('hide');
  } else {
    start.innerText = 'Restart';
    start.classList.remove('hide');
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add('correct');
    score.innerHTML = score1++;
  } else {
    element.classList.add('wrong');
  }
}


function clearStatusClass(element) {
  element.classList.remove('correct');
  element.classList.remove('wrong');
}

var questions = [
  {
    question: 'What is JavaScript?',
    answers: [
      { text: 'a coding language', correct: true },
      { text: 'a type of coffee', correct: false },
      { text: 'a kind of bug', correct: false },
      { text: 'the name of my dog', correct: false }
    ]
  },
  {
    question: 'What do we use to select elements on a page with JS?',
    answers: [
      { text: '.querrySelector', correct: true },
      { text: '.getElement', correct: false },
      { text: '.createElement', correct: false },
      { text: '.setClass', correct: false }
    ]
  },
  {
    question: 'who invented JavaScript?',
    answers: [
      { text: 'Bill Gates', correct: false },
      { text: 'Steve Wozniak', correct: false },
      { text: 'Steve Jobs', correct: false },
      { text: 'Brendan Eich', correct: true }
    ]
  },
  {
    question: 'how do we select elements with querrySelector?',
    answers: [
      { text: '("element-id")', correct: false },
      { text: '("#element-id")', correct: true },
      { text: '#element-id', correct: false },
      { text: 'element-id', correct: false }
    ]
  },
  {
    question: 'What can JavaScript be used for?',
    answers: [
      { text: 'walking your dog', correct: false },
      { text: 'making a sandwhich', correct: false },
      { text: 'building the frame for a webpage', correct: true },
      { text: 'buying clothes', correct: false }
    ]
  },
  {
    question: 'what do we use to watch for events in Js?',
    answers: [
      { text: '.Math.floor', correct: false },
      { text: '.Math.Random', correct: false },
      { text: '.Math.ceiling', correct: false },
      { text: '.addEventListener', correct: true }
    ]
  },
  {
    question: 'how do you change the innertext in JavaScript?',
    answers: [
      { text: '.inner', correct: false },
      { text: '.innerText', correct: true },
      { text: '.text', correct: false },
      { text: '.html', correct: false }
    ]
  },
  {
    question: 'How do you add html with JavaScript?',
    answers: [
      { text: '.html', correct: false },
      { text: '.inner', correct: false },
      { text: '.innerHTML', correct: true },
      { text: '.innerhtml', correct: false }
    ]
  },
  {
    question: 'how do you change style properties in JS?',
    answers: [
      { text: '.css', correct: false },
      { text: '.style', correct: false },
      { text: '.cssstyle', correct: false },
      { text: '.setAttribute', correct: true }
    ]
  },
  {
    question: 'What is JavaScript?',
    answers: [
      { text: '.append', correct: true },
      { text: '.child', correct: false },
      { text: '.childappened', correct: false },
      { text: '', correct: false }
    ]
  },
]

rightAnswers = ['.append', '.setAttribute', '.innerHTML', '.innerText', 'a coding language', '.querrySelector', 'Brendan Eich', '("#element-id")', 'building the frame for a webpage', '.addEventListener']

