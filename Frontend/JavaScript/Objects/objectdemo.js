let x={name:"sanket", age:24};

let y={
    name:"sanket",
    age:25
};

console.log(x["name"]);
console.log(y.name);

// objects are mutable
y.name="tanmay"
console.log(y.name);


x.marks=100;
x["comapnay"]="jungleworks";
console.log(x);


delete x.name;
console.log(x);
