/*first program */
function isEmpty(obj) {
    if (Object.keys(obj).length === 0) {
      console.log("true");
    } else {
      console.log("false");
    }
  }
  
  isEmpty({}); 
  isEmpty({ a: 1 }); 
//second2
function toUpperCase(arr){
    return arr.map((ele)=>ele.toUpperCase());
  }
  toUpperCase(['apple','banana']);
//reverse 3
function reverseString(str) {
    return str.split("").reverse().join("");
  }
  console.log(reverseString("hello")); 
 //first letter capital
 function capitalizeWords(str) {
  return str.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ");
}
console.log(capitalizeWords("hello world")); 
// array duplicate elements
function findDuplicates(arr) {
  return arr.filter((item, index) => arr.indexOf(item) !== index);
}
// class
class Cache {
  constructor() {
    this.store = {};
  }
  set(key, value) {
    this.store[key] = value;
  }
  get(key) {
    if (this.store[key]) {
      return this.store[key];
    } else {
      return "Key not found";
    }
  }
}
  
const cache = new Cache();
cache.set("name", "John");
console.log(cache.get("name")); 
console.log(cache.get("age"));
// summ of two arrays
function sumoftwoArray(array1,array2) {
     const maxLength = Math.max(array1.length, array2.length);
    const add=[];
     for (let i=0; i<maxLength; i++) {
        const sum=(array1[i] || 0) + (array2[i] || 0);
        add.push(sum);
    }
    return add;
}
const array1=[1,0,2,3,4];
const array2=[3,5,6,7,8,13];
const add = sumoftwoArray(array1, array2);
console.log(add);  
// remove dupicate
const arr=[1,2,3,4,5,3,3,3,3,1,1,3,4,1];
const filterduplicates=[...new Set(arr)];
console.log(filterduplicates); 
// 
const array = [];
for (let i = 97; i <= 122; i++) {
arr.push({ [String.fromCharCode(i)]: (i - 96) * 10 });
}
const vowels = 'aeiou';
const filterVowels = array.filter((obj) => {
const key = Object.keys(obj)[0];
return vowels.includes(key);
});
console.log(filterVowels);
//
const obj={};
let num=1;
for (let i=97; i<=122; i++) {
  const key=String.fromCharCode(i);
  obj[key]=num++;
}
const vowel='aeiou';
for (const key in obj) {
  if (!vowel.includes(key)) {
    delete obj[key];
  }
}
console.log(obj);