let n=101;
function loneOnes(n) {
    let count=0;
    let str=n.toString();
    for (let i=0; i<str.length; i++) {
       if (str[i]=='1' && str[i-1]!='1' && str[i+1]!='1') {
        count++;
      }
    }
    return count;
}
console.log(loneOnes(n));