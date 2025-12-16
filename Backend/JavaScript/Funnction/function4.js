function add(x,y){
    return x+y;
}
console.log(add(10,20));


// default parameter 
function add1(x,y=5){
    return x+y;
}
console.log(add1(10));


function add2(x,y=5,z){
    console.log(x);
    console.log(y);
    console.log(z);

    return x+y+z;

}

console.log(add2(10))