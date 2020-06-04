// let angka = Math.ceil(Math.random() * 6)
// let tampung= []


// for(let i = 0; i < tampung.length+1;i++){
//     if(angka !== tampung[i]){
//         tampung.push(angka)
//     }
// }
// console.log(tampung)
var items = ['hehe', 'haha', 'hihi', 'huhu']

let tampung = []
var item = items[Math.floor(Math.random() * items.length)];
for(let i = 0; i < items.length;i++){
    for(let j = 0; j < items.length;j++){
    if(tampung[i] === tampung[j]){
    tampung.push(items[Math.floor(Math.random() * items.length)])
    console.log(tampung[i], tampung[j])
    // console.log(tampung)
    }    
    }
}

console.log(tampung)