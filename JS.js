// //higherOrder function - funtion that oprate on another function , either taking argument or returning them.
// function higherOrder (){
//     return  function(){console.log("highter function called with return")
// }
// }
// const x = higherOrder()
// x()

// // curring - when n argument of a function is transform into n function 
// function add (a){
//     return function(b){
//         return a+b
//     }

// }
// console.log(add(2)(3))

//closure - abilty of function to remember variable and function that are declared in outer scope   

//calback - function that are used as a argument of anthor function is called callback fun. 
  
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function reverseString(str){
    let rStr = ""
    for(var i= str.length-1;i>=0;i--){
        rStr +=str[i]
    }
    return rStr;
}
var str = "Hello Ashish pal ,where are you ?"
// var str = [1,3,5,7,8]
var a =reverseString(str)
console.log(a)

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////