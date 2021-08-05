// Even odd number in simple way

    var a= 6;
        if(a%2 == 0)
        {
            console.log('This number is Even');
        }
        else{
            console.log('This number is odd');
        }
   
        
//Even odd in loop 

        // using even for loop

    let num = 20;
    
    for(let i=0;i<=num;i+=2)
    {
        console.log("Even Number is :", i);
        
    }

    // using odd for while

    let num1=1;
    while(num1<=20){
        console.log(num1);
        num1+=2
    }

    // 1.using arry and function to add even numbers
    //     1.1 how many number in enen to show 

    function addeven(input_number){
      
        count = 1;
        let addition =0;
        for(let p = 2;p<=input_number;p+=2)
        {   
            var even = p;
            console.log(even);

           //how many circle to get the output
            console.log(count++);  
            
            // addition of the even number 
            addition = addition + even;
            console.log(addition);

        }
        console.log(addition);
        var p =  addition;

       console.log(p);
      
    }
   //function call of addition
    addeven(16);
   
    
  
    
