const question = document.getElementById("question")
const qImg = document.getElementById("qImg")
const A = document.getElementById("A")
const B = document.getElementById("B")

const counter = document.getElementById("counter")
const progress = document.getElementById("progress")
const scoreDiv = document.getElementById("scoreContainer")

let questions = [{
    question: 'Mobil apakah diatas?',
    imgSrc: 'img/avanza.jpg',
    A: 'Daihatsu Xenia',
    B: 'Toyota Avanza',
    correct: 'B'
},
{
    question: 'Mobil apakah diatas?',
    imgSrc: 'img/xenia.jpg',
    A: 'Daihatsu Xenia',
    B: 'Toyota Avanza',
    correct: 'A'
},
{
    question: 'Mobil apakah diatas?',
    imgSrc: 'img/calya.jpg',
    A: 'Toyota Calya',
    B: 'Daihatsu Sigra',
    correct: 'A'
},
{
    question: 'Mobil apakah diatas?',
    imgSrc: 'img/sigra.jpg',
    A: 'Toyota Calya',
    B: 'Daihatsu Sigra',
    correct: 'B'
},
{
    question: 'Mobil apakah diatas?',
    imgSrc: 'img/ayla.jpg',
    A: 'Toyota Agya',
    B: 'Daihatsu Ayla',
    correct: 'B'
},
{
    question: 'Mobil apakah diatas?',
    imgSrc: 'img/agya.jpg',
    A: 'Toyota Agya',
    B: 'Daihatsu Ayla',
    correct: 'A'
}]

const lastQuestion = questions.length
let runningQuestion = Math.floor(Math.random()*3)
let count = 8
const questionTime = 0
let TIMER
let score = 0
let tampung = []

function renderQuestion(){
    let q = questions[runningQuestion]
    tampung.push(q)
    console.log(tampung)
    question.innerHTML = "<p>"+ q.question +"</p>"
    qImg.innerHTML = "<img src="+ q.imgSrc +">"
    A.innerHTML = q.A
    B.innerHTML = q.B
}
    renderQuestion()
    renderCounter()
    TIMER = setInterval(renderCounter,1000)
function renderCounter(){
    if(count >= questionTime){
        counter.innerHTML = count
        count--
    }else{
        count = 8
        if(tampung.length < lastQuestion){
            runningQuestion = Math.floor(Math.random()*3)
            renderQuestion()
        }else{
            clearInterval(TIMER)
            window.location.href = `/result.html?score=${score}`;
        }
    }
}

function checkAnswer(answer){
    if( answer == questions[runningQuestion].correct){
        score++
    }else{
    }
    count = 0
    if(tampung.length < lastQuestion){
        runningQuestion = Math.floor(Math.random()*3)
    }else{
        clearInterval(TIMER)
        // scoreRender();
        window.location.href = `/result.html?score=${score}`
    }
}




















