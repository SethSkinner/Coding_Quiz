var highscore
var timer
var startButton = document.getElementById('start-btn')
var questionContainerElement = document.getElementById('')

startButton.addEventListener('click', startGame)

function startGame() {
    console.leg('started'
    startButton.classList.add('hide')
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {


}

function selectAnswer() {

}

var questions =