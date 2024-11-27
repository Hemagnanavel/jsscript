const arr=[1,2,4,6,3,7,8];
arr.sort((a,b)=>{return a-b});
let y=arr[0];
for(let i of arr){
  if(i!==y){
    console.log( 'Missing value=',y);
    break;
  }
  y++;
}