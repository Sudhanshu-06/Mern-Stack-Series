let str= "microsoft";
console.log(str[2]);

console.log(str.length);
console.log(str.length-1);

for(let idx=0; idx<= str.length-1; idx++){
    console.log(idx,str[idx]);
}

// palindrome

let palindromeStr= "madam";

let reverseStr= "";

for(let idx=palindromeStr.length-1; idx>=0; idx--){
    reverseStr+= palindromeStr[idx];
}

if(reverseStr===palindromeStr){
    console.log(palindromeStr, "is a palindrome");
}
    

function checkPalindrome(num){
    let str=""+num;
    let i=0;
    let j=str.length-1;
    while(i<=j){
        if(str[i]==str[j]){
            i++;
            j--;
        }else{
            return false;
        }
    }
    return true;
}

console.log(checkPalindrome(1991));