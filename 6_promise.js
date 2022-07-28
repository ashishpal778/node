let a = 10;
let b = 20;
// b=40
let waitingData = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(30)
    },2000)
})

waitingData.then((data)=>{
b=data
console.log(a+b)
})
// console.log(a+b)

