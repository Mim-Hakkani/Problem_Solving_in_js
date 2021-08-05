//positive negative number
/*
      var a = -5;
        if(a>0){
        console.log('This Number us : Positive ')
        } 
        else{
            console.log('This is the Negative Number');
        }
    */
    //Same problem using function

    function pos_neg(num){
        if(num>0){
            return ('This Number us : Positive ');
        }
        else if(num==0){
            return ('This is Nutral value ');   
        }
        else{
            return ('This Number us : Negative ');
        }
    }
    console.log(pos_neg(0));
    console.log(pos_neg(-45));