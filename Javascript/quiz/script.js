const quizes = [
  {
    que: 'What is the Capital of Pakistan?',
    options: ['Karachi', 'Lahore', 'Islamabad', 'Hyderabad'],
    correct: 'Islamabad'
  },
  {
    que: 'What is the National Sport of Pakistan?',
    options: ['Cricket', 'Hockey', 'Tennis'],
    correct: 'Hockey'
  }
]

let currentQuestion = 0
let rightAnswers = 0
let wrongAnswers = 0
let userAnswer = undefined

const quizContainer = document.getElementById('quizContainer')
const resultContainer = document.getElementById('resultContainer')
const nextBtn = document.getElementById('next-btn')

const showQuestion = () => {
  quizContainer.innerHTML = null
  let queDiv = document.createElement('div')
  let h3 = document.createElement('h3')
  h3.innerText = quizes[currentQuestion].que
  h3.className = 'quiz-question'
  queDiv.appendChild(h3)
  quizes[currentQuestion].options.map(data => {
    let optionDiv = document.createElement('div')
    let input = document.createElement('input')
    let span = document.createElement('span')
    input.type = 'radio'
    input.name = 'quiz-option'
    input.value = data
    span.innerText = data
    input.addEventListener('change', function () {
      console.log(this.value)
      userAnswer = this.value
      nextBtn.disabled = false
    })
    optionDiv.appendChild(input)
    optionDiv.appendChild(span)
    optionDiv.className = 'quiz-option'
    queDiv.appendChild(optionDiv)
  })

  quizContainer.appendChild(queDiv)
}

function checkValue () {
  console.log(this)
}

showQuestion()

nextBtn.addEventListener('click', showNextQuestionn)

function showNextQuestionn () {
  const question = quizes[currentQuestion]
  if (userAnswer === question.correct) {
    rightAnswers++
  } else {
    wrongAnswers++
  }

  if (currentQuestion + 1 < quizes.length) {
    currentQuestion++
  } else if (currentQuestion + 1 === quizes.length) {
    resultContainer.style.display = 'block'
    showResult()
    quizContainer.style.display = 'none'
    nextBtn.style.display = 'none'
  }

  nextBtn.disabled = true

  showQuestion()
}

function showResult () {
  resultContainer.innerHTML = null
  const div = document.createElement('div')
  const h1 = document.createElement('h1')
  h1.innerText = rightAnswers > wrongAnswers ? 'You Win' : 'You Lost'
  const rightH3 = document.createElement('h3')
  rightH3.innerText = 'Right Answers ' + rightAnswers
  const score = document.createElement('h3')
  score.innerText = 'Score ' + rightAnswers * 10
  const wrongH3 = document.createElement('h3')
  wrongH3.innerText = 'Wrong Answers ' + wrongAnswers

  div.appendChild(h1)
  div.appendChild(rightH3)
  div.appendChild(score)
  div.appendChild(wrongH3)

  resultContainer.appendChild(div)
}
