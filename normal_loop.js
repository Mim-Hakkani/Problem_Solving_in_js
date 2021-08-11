//incrementing loop ...see series and its summation
let sum =0;
for(let i=0;i<=6;i++)
{
    sum=sum+i;
   
    console.log(i);
}
console.log('Total summation is : ',sum);

// same loop is working for decreamenting

let summtion =0;
for(let j=6; j>=1;j--)
{
    summtion =summtion+j;
    console.log(j);
}
console.log(summtion);

//same work using function

function sumi(num){
    if(num==1)
    {
        return 1;
    }

   return sumi(num-1)+num;

   

}

console.log(sumi(6));
