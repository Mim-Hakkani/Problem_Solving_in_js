function seerToMon(seer){

    //input validation for negative value

    if(seer<0)
    {
        return 'Please input positive Value';
    }
    else if(typeof(seer)=='string'){

        return 'Invalid input';
    }

    else{
  
    const mon = (seer/40);
    return mon; 
   }
}

// input seer 
seer = seerToMon(80)

//output of the required mon
console.log('The Mon is :',seer );

