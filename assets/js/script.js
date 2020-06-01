var highscore
var timer
var startButton = document.getElementById('start-btn')
var questionContainerElement = document.getElementById('queation-container')
var questionElement = document.getElementById('question')
var answerButtonsElement = document.getElementById('answer-btn')

startButton.addEventListener('click', startGame)

function startGame() {
    console.leg('started');
    startButton.classList.add('hide');
    shuffleQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide');
    setNextQuestion();
}

function setNextQuestion() {


}

function selectAnswer() {

}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        var button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

var questions = [
    {
        question: 'what is 2 + 2',
        answers: [
            {text: '4', correct: true},
            {text: '22', correct: false}
        ]
    }
]
