// setTimeout(()=> console.log("Timer Ended"),2000)

// setInterval(()=> console.log("Timer Ended"),2000)

fetch("https://dummyjson.com/users")
.then(res => res.json())
.then(res => console.log(res))
.catch(err => console.log(Error))

// console.log(res);