    const obj= {a:1,b:2, c:3} 
    for (const key in obj){
   // console.log(obj[key]);
   // console.log(key);
    console.log(key+"-"+obj[key]);
    }
    let fruits = ["Apple", "Banana", "Carrot", "Guava", "Orange"];
    for (let element of fruits) {
     console.log(element);
    //console.log(element +"-"+fruits[element]);
    }
    // while loops
    let count = 0;
    while (count < 4) { 
     console.log(count);
     count++; 
}
//do while
let count1 = 0;
do {
  console.log(count);
  count1++;
} while (count1 < 5);
//function
function add(a, b) {
  let sum = a + b; 
  return sum; 
}
console.log(add(1, 22));
//events
function submitForm(event) {
  event.preventDefault();
  alert("form submitted");
}
//fuction create
// prototype object
let person = {
  firstname: "steve",
  lastname: "jobs",
  fullName: function() {
    return "My name is " + this.firstname + " " + this.lastname;
  }
}
// create a new object
let newPerson = Object.create(person);
// change the value of the new object
newPerson.firstname = "Hema";
newPerson.lastname = "Gnanavel";
console.log(person.fullName());
console.log(newPerson.fullName());
//accessing object 
/*let car = {
  name: "Ford",
  color: "Black"
}

// accessing the property
console.log(car.name);
console.log(car["color"]);
*/
//object for in 
let car = {
  name: "Ford",
  color: "Black",
  model: "Avenger"
}

// looping through the object
for (let key of Object.keys(car)) {
 // console.log(key, car[key]);
// console.log(key);
 console.log( car[key] );
}
/*array
let x=[1,22,3,13,24]
x[2]=2;
console.log(x);
x.unshift(44);
console.log(x);
*/
let x=[2,33,'data',true];
let y=[23,100,44,false,88];
let kk=['d','f','v','r','a'];
console.log(x.concat(y));
console.log(x.includes(33));
console.log('data'.indexOf('t'));
console.log(x.reverse());
console.log(x.slice());
z=x.slice(2);
console.log(z);
// console.log(y.splice(1,1,22));
console.log(y);
console.log(y.sort((a,b)=>{
  return b-a;
}
));
console.log(kk.sort());
const data=[1.7,33];
data.push(55);
data.unshift(2);
console.log(data);


//fill
const arr = ["a", "c", "f","e", "r", "t", "a"];
console.log(arr.fill("b"));
//day
let today=new Date();
var day = today.getDate();
console.log(day);