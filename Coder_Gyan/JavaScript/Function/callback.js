
// Synchoronous call

/*
function waitForThreeSeconds(){
    let ms = 3000 + new Date().getTime();
    while(new Date() < ms){}
}


function register(){
//     waitForThreeSeconds();
//     console.log("Register end")
// }
// function sendmail(){
//     waitForThreeSeconds();
//     console.log("email end")
// }
// function login(){
//     waitForThreeSeconds();
//     console.log("login end")
// }
// function getuserData(){
//     waitForThreeSeconds();
//     console.log("got user data")
// }
// function dispalyUserData(){
//     waitForThreeSeconds();
//     console.log("user data display")
// }



//  Async call

function register(){
    waitForThreeSeconds();
    console.log("Register end")
}
function sendmail(){
    waitForThreeSeconds();
    console.log("email end")
}
function login(){
    waitForThreeSeconds();
    console.log("login end")
}
function getuserData(){
    waitForThreeSeconds();
    console.log("got user data")
}
function dispalyUserData(){
    waitForThreeSeconds();
    console.log("user data display")
}

*/


function register(callback){
    setTimeout(()=>{
        console.log("Register end")
        callback();
    },2000)
    
}
function sendmail(callback){
    setTimeout(()=>{
        console.log("Email end")
        callback();
    },1000)
}
function login(callback){
    setTimeout(()=>{
        console.log("login end")
        callback();
    },1000)
}
function getuserData(callback){
    setTimeout(()=>{
        console.log("got user data")
        callback();
    },1000)
}
function dispalyUserData(){
    setTimeout(()=>{
        console.log("user data displayed")
    },1000)
}

console.log("other applications work")

// callback hell - function nesting - problem solved by promises

register(function(){
    sendmail(function(){
        login(function(){
            getuserData(function(){
                dispalyUserData();
            });
        
        });
        
    });
    
});
