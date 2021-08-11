
let fact =1;

function factirial(num){
    if(num==1)
    {
        return 1;
    }

    return factirial(num-1)*num;

}
console.log(factirial(4));