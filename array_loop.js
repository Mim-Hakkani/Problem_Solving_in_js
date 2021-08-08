
/*
      using for loop

*/ 


            //array declaretion
            var roll = [121,21,43,14,54,26,777,38,79,100];

            // using for loop
            let maximum = roll[0];
            console.log(maximum);
            for (let a = 0; a <roll.length; a++) {
                const element = roll[a];
                console.log(element);

                //mamimum number of array 

                if(element>maximum)
                {
                     maximum=element;
                    
                }
               
                
                
            }
     
     console.log('The maximum number is :',maximum);
