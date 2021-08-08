
/*
      using for loop

*/ 


            //array declaretion
            var roll = [121,21,43,14,54,26,777,38,79,100];

            // using for loop
            let minimum = roll[0];
          
            for (let a = 0; a <roll.length; a++) {
                const element = roll[a];
                
                // minimum number of array 

                if(element<minimum)
                {
                    minimum = element;
                }
               
                
                
            }
     
   console.log('minimum number of this array is : ',minimum);
