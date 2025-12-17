// return one function from another function
function sum(){
    // computation
    return function x(){
        return 10;
    }
}


function anotherfunction(f1){
    f1();
    console.log("called f1")

}

function hello(){
    console.log("hello")
}
anotherfunction(hello);