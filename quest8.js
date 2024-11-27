function whitespace(str){
    let newstr=[];
    for( let i=0; i<str.length; i++){
        if (i<str.length-1 && str[i+1].toUpperCase()==str[i+1]) {
            newstr+=str[i]+' ';
        }
        else{
            newstr+=str[i];
        }
    }
    return newstr;
  }
  console.log(whitespace("TheGreatestUpsetInHistory"));
  