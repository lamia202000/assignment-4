function findAddress(obj){
var output = object.values(obj);
return output;
}

var myOutput = findAddress({
    street: 10,
    house: "15A",
    society: "Earth Profet"
});
console.log (myOutput);