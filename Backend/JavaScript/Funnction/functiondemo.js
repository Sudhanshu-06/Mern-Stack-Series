// using the below syntax we can define our function/ blackbox
function greetings(){
    console.log("Hello function");
    console.log("Hello function");
    console.log("Hello function");
}

greetings(); // calling our functions


function isEvenOrOdd(x){
    //  x is a parameter placeholder
    if(x%2==0){
        console.log("Even");
    }else{
        console.log("Odd");
    }
}

const ans= isEvenOrOdd(19);
console.log(ans);


function multiply(a,b){
    console.log(a*b);
}
multiply(5,6);