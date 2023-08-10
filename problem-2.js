function matchFinder(string1 , string2){
const name=string1.includes(string2);
if(name===true){
  return true;
}
else{
  return false;
}
}
const output= matchFinder("John Doe","ohn");
console.log(output);