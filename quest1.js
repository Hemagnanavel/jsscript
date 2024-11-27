const data="geeksforgeeks";
function nonRepeat(data) {
    for (let i=0; i<data.length; i++){
          if (data.indexOf(data[i])==data.lastIndexOf(data[i])) {
      return data[i];
    }
  }
}
console.log(nonRepeat(data));