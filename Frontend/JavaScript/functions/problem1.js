function isEvenOrOdd(num){
    if(num%2==0){
        return true;
    }else{
        return false;
    }
}

// some logic 
let x=10;
let y=20;
let z=81;

if(isEvenOrOdd(x)){
    console.log("x is even");
}else{
    console.log("x is odd");
}

if(isEvenOrOdd(y)){
    console.log("y is even");
}else{
    console.log("y is odd");
}


if(isEvenOrOdd(z)){
    console.log("z is even");
}else{
    console.log("z is odd");
}



// let x=10;
// let result= isEvenOrOdd(x); 
// if(result==true){
//     console.log("Even");
// }else{
//     console.log("Odd");
// }



// for(let i=1; i<=20;i++){
//     let result = isEvenOrOdd(i);
//     if(result==true){
//         console.log(i + " is Even");
//     } else{
//         console.log(i + " is Odd");
//     }
// }