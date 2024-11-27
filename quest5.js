const x=new Date("June 14, 2019");
const y=new Date("June 20, 2019");
let z=y-x;
let ms=z/1000;
let s=ms/60;
let mi=s/60;
let hour=mi/24;
let day=hour/1;
console.log(day);