function perfectFriend(fname){

   
   
  
    // validation of no declare of array value 
    if(fname.length==false){

        return 'please enter some value to array';
    }

    // if array value check
    else if(fname == ''){
        return 'please write your friend name as you like';
    }

   

    else{

    

            for (let a = 0; a < fname.length; a++) {
                let element = fname[a].length;
                
                if(element == 5)
                {
                    return fname[a];
                   
                
                }

                
            }

        }    
     
    
}

//input friend name to array in string

  var fname =[1,2,3,4,5];

  

  //function call and parameter
  let best_friend = perfectFriend(fname);

  //finally show the perfect friend name 

  console.log('my perfect friend is : ',best_friend);
