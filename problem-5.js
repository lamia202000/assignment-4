function canPay ( changeArray, totalDue ){
let sum=0;
for (let i=0 ; i<changeArray.length; i++)
{
    const element=changeArray[i];
    sum=sum+element;

    if(sum<totalDue){
        return false;
    } 
    else{
        return true;
    }
   
}
}

const myResult = canPay([1,2,5] , 10 );
console.log(myResult);
