function sortMaker(arr) {
for (let i=arr.length-1; i>0; i--)
{
    const index=i;
    const element= arr[index];
    console.log(element);
}


}
const myResult = sortMaker([2,3]);
console.log(myResult);