const kuis = document.getElementById('kuis')
const gambarMobil = document.getElementById('gambarMobil')
const pertanyaan = document.getElementById('pertanyaan')
const timer = document.getElementById('timer')
const counter = document.getElementById('counter')
const fullQuestion =document.getElementById('fullQuestion')
const counterQuestion = document.getElementById('counterQuestion')
const multipleChoice = document.getElementById('multipleChoice')
const A = document.getElementById('A')
const B = document.getElementById('B')
const progress = document.getElementById('progress')


let pertanyaan = [{
    pertanyaan: 'Mobil apakah diatas?',
    img: 'easy/toyota avanza.jpg',
    A: 'Daihatsu Xenia',
    B: 'Toyota Avanza',
    correct: 'B'
},
{
    pertanyaan: 'Mobil apakah diatas?',
    img: 'easy/daihatsu xenia.jpg',
    A: 'Daihatsu Xenia',
    B: 'Toyota Avanza',
    correct: 'A'
},
{
    pertanyaan: 'Mobil apakah diatas?',
    img: 'easy/toyota calya.jpg',
    A: 'Toyota Calya',
    B: 'Daihatsu Sigra',
    correct: 'A'
},
{
    pertanyaan: 'Mobil apakah diatas?',
    img: 'easy/daihatsu sigra.jpg',
    A: 'Toyota Calya',
    B: 'Daihatsu Sigra',
    correct: 'B'
},
{
    pertanyaan: 'Mobil apakah diatas?',
    img: 'easy/daihatsu ayla.jpg',
    A: 'Toyota Agya',
    B: 'Daihatsu Ayla',
    correct: 'B'
},
{
    pertanyaan: 'Mobil apakah diatas?',
    img: 'easy/toyota agya.jpg',
    A: 'Toyota Agya',
    B: 'Daihatsu Ayla',
    correct: 'A'
}]

let runningQuestion = Math.floor(Math.random()*pertanyaan.length)

function renderQuestion(){
    let index = pertanyaan[runningQuestion]
    gambarMobil.innerHTML = `<img src= ${index.img}>`
    pertanyaan.innerHTML = `<p> ${index.pertanyaan}</p>`
    A.innerHTML = index.A
    B.innerHTML = index.B
    
}