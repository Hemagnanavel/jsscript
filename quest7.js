const str="Make sure uoy only esrever sdrow of ddo length";
function reverseOdd(str){
let word=[];
word=str.split(" ");
for(let i=0; i<word.length; i++){
    if (word[i].length%2!=0) {
        word[i]=word[i].split("").reverse().join("");
    }
}
    return word.join(" ");
}
console.log(reverseOdd(str));