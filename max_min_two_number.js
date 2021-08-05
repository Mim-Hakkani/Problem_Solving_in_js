// maximum number bteween two 

    var a= 15;
    var b = 25;
    if(a>b){
        console.log('maximum value is  :',b);
    }
    else
    {
        console.log('maximum value is : ',b)
    }
 

 
    // minimum number beteween three numbers 


    //max min in functions

    function max_min(num1,num2,num3){
        if(num1<num2 && num1<num3){
            console.log('minimum value is  :',num1);
        }
        else if(num2<num3 && num2<num1)
        {
            console.log('minimum value is  :',num2);
        }
        else{
            console.log('minimum value is  :',num3);
        }
    }
    max_min(45,49,10)
    max_min(5,10,15);
    max_min(25,15,175);

