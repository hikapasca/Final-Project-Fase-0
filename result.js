const hasil = document.getElementById("hasil")
const params = new URLSearchParams(window.location.search)
// hasil.innerHTML = params.get("score")
let score = params.get("score")
// let length = params.get("tampung")
let result = Math.round(100* score/6)
hasil.innerHTML = result