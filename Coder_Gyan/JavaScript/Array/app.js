const language = ["Html","css","js","react","next"]
console.log(language.length)
console.log(language[1])

language.push("node");
console.log(language)

language.unshift("Golang")
console.log(language)

language.pop();
console.log(language)

language.shift();
console.log(language)


const actros = [
    {
        name: "Actor1",
        payment: 100
    },
    {
        name: "Actor2",
        payment: 200
    },
    {
        name: "Actor3",
        payment: 300
    }
]

// for(let i = 0; i< actros.length; i++){
//     actros[i].payment = actros[i].payment - 10;
    
// }
// console.log(actros)

actros.forEach((actor)=>{
    actor.payment = actor.payment-10;
})

console.log(actros)


// filetr

const student = [
    {
        name: "Ayush",
        marks : 54
    },
    {
        name: "Aditya",
        marks : 36
    },
    {
        name: "auman",
        marks : 54
    },
]



const failed = student.filter((student)=>{
    if(student.marks < 40){
        return true;
    }else{
        return false;
    }
});

// return student.marks < 40;
// const failed = student.filter((student)=> student.marks <40 );

console.log(failed)



// map

const users = [
    {
        fname: "Ayush",
        lname: "Kumar"
    },
    {
        fname: "Aditya",
        lname: "Kumar"
    },
    {
        fname: "auman",
        lname: "Kumar"
    },
];

const finalUsers = users.map((user) =>{
    return {
        // fullname: user.fname + ' ' +user.lname
        fullname : `${user.fname} ${user.lname}`
    };
})

console.log(finalUsers)



// Reduce

const movies = [ 
    {
        name: "SitaRam",
        budget: 100
    },
    {
        name: "Ramayan",
        budget: 500
    },
    {
        name: "Krishna",
        budget: 300
    },
];


// let total = 0;

// movies.forEach((movie) =>{
//     total = total + movie.budget;
// })


const total = movies.reduce((acc, movie) =>{
    acc = acc + movie.budget;
    return acc;
},0)

console.log(total)


// Indexof

const admins = [2,1,5];

const user_1 = {
    name: 'XYZ',
    id : 5
}

console.log(admins.indexOf(user_1.id))
const isAdmin = admins.indexOf(user_1.id) > -1;
console.log(isAdmin)


// Includes

console.log(admins.includes(user_1.id))



// find

const people = [
    {
        name:"Sudh",
        id: 1
    },
    {
        name:"Wqz",
        id: 2
    },
    {
        name:"pqr",
        id: 3
    }

]

const myUser = people.find((user)=>{
    if(user.id === 2){
        return true;
    }
    return false;

})
console.log(myUser)


// Sort 

const names = ['John','Jane','Shyam','Ram','Sanu','Sameer'];
names.sort();

console.log(names);

// Splice
const names_1 = ['John','Jane','Shyam','Ram','Sanu','Sameer'];
names_1.splice(2,1);
console.log(names_1)