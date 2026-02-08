
function register(callback) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Register end");
      resolve();
    }, 2000);
  });
}


// function sendmail() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//         return reject('Error while processing');
//       console.log("Email end");
      
//     }, 1000);
//   });
// }

function sendmail() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Email end");
          return resolve('Error while processing');
         }, 1000);
    });
  }


function login() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("login end");
    }, 1000);
    resolve();
  });
}


function getuserData(callback) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("got user data");
    }, 1000);
    resolve();
  });
}


function dispalyUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("user data displayed");
    }, 1000);
    resolve();
  });
}

// register()
//     .then(sendmail)
//         .then(login)
//             .then(getuserData)
//                 .then(dispalyUserData)
//                 .catch((err)=>{
//                     console.log("error",err)
//                 });




// Async await


// -- first metthod

/*
async function authenticate(){
    await register();
    await sendmail();
    await login();
    await getuserData()
    await dispalyUserData();
} 
*/

//-- second method using try catch

async function authenticate(){
    try{
        await register();
        await sendmail();
        await login();
        await getuserData()
        await dispalyUserData();
    }catch(err){
        console.log(err);
        throw new Error();
    }
} 
authenticate().then(()=>{
    console.log("All done")
}).catch((err)=>{
    console.log(err)
});

console.log("other applications work");
