function login(username,password){
    // code

    //logic

    console.log(`${username}, Loged in successfully`)
}
console.log(login('john'));


// return

function upperCase(str){
   return str.toUpperCase();
}
const result = upperCase('javascript');
console.log(result);


// Default parameter
function calculateArea(width,height=1){
    const area = width * height;
    return area;
}

const result_1 = calculateArea(5,7)
console.log(result_1)



// callbacks

function formatText(text,formatCb){
    return typeof formatCb === 'function' ? formatCb(text) : text.toUpperCase();
}

const result_2 = formatText('hello', function(text){
    return text.charAt(0).toUpperCase() + text.slice(1);
})

console.log(result_2)



// IIFE
console.log("first");

(function setup(){
    console.log("setup done");
})();



// Arrow function

const login_1= ()=>{
    console.log('Logged in')
}
login_1();

// short hand for same line arrow fumction
// const sum = (num1, num2)=> num1 + num2;

const sum = (num1, num2) =>{
    return num1+num2;
}

const result_3 = sum(64,47)
console.log(result_3)