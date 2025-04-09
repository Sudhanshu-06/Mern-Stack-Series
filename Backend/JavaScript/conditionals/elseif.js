let userSubscription= "premium"

if(userSubscription == "unsubscribed"){
    console.log("show pricing page");
}else if(userSubscription== "super"){
    console.log("only hindi content");
}else if(userSubscription=="premium"){
    console.log("show all content");
}else{
    console.log("not show any content");
}

console.log("end");