let i=1;
while(i<=100){
    console.log(i);
    i++;

}

let a=1;
while(a<=10){
    if(a%7==0){
        break;
    }
    console.log(a);
    a++;
}


let b=1;
while(b<=10){
    if(b%7==0){
        continue;
    }
    console.log(b);
    b++;
}
