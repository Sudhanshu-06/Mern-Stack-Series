// Asynchornous Javascript
console.log("Hello");

function greeting(){
    console.log("I am from setTimeout")
}

// setTimeout(function(){
//     console.log("I am from setTimeout")
// },3000)

setTimeout(greeting(),3000)

console.log("JavaScript")