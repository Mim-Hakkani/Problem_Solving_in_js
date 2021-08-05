function alloperation(num1,num2,operation){
   
    switch(operation){
        case '+':
            console.log('Command is ready sir !!');
            console.log('Addition Calculation');
            var total = num1 + num2 ;
           console.log("Total Additon is : ",total);
            break;
        case '-':
            console.log('Command is ready sir !!');
            console.log('Substration Calculation');
            var total = num1 - num2 ;
           console.log("Total Substration is : ",total);
            break;
        case '*':
            console.log('Command is ready sir !!');
            console.log('Multiplication Calculation');
            var total = num1 * num2 ;
           console.log("Total Multiplication is : ",total);
            break;
    
            case '/':
                console.log('Command is ready sir !!');
                console.log('Division Calculation');
                var total = num1 / num2 ;
               console.log("Total Division is : ",total);
                break;
            case '%':
                console.log('Command is ready sir !!');
                console.log('Reminder Calculation');
                var total = num1 % num2 ;
               console.log("Total Reminder is : ",total);
                break;
    
       default:
        console.log('Invalid Operation Command Plesae Input valid command ...');
    
    }


}

let operation = '+';
alloperation(10,20,operation);

/*
 operation = '-';
alloperation(50,10,operation);

operation = '%';
alloperation(50,20,operation);

*/


// Same Problem in normal switch case..
/*
let operation = '%';
switch(operation){
    case '+':
        console.log('Command is ready sir !!');
        console.log('Addition Calculation');
        var total = 10 + 20 ;
       console.log("Total Additon is : ",total);
        break;
    case '-':
        console.log('Command is ready sir !!');
        console.log('Substration Calculation');
        var total = 10 - 20 ;
       console.log("Total Substration is : ",total);
        break;
    case '*':
        console.log('Command is ready sir !!');
        console.log('Multiplication Calculation');
        var total = 10 * 20 ;
       console.log("Total Multiplication is : ",total);
        break;

        case '/':
            console.log('Command is ready sir !!');
            console.log('Division Calculation');
            var total = 10 / 20 ;
           console.log("Total Division is : ",total);
            break;
        case '%':
            console.log('Command is ready sir !!');
            console.log('Reminder Calculation');
            var total = 10 % 20 ;
           console.log("Total Reminder is : ",total);
            break;

   default:
    console.log('Invalid Operation Command Plesae Input valid command ...');

}
*/