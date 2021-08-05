//grade calculation
/*
       var grade = 195;
        if(grade>=0 && grade <=32)
        {
            console.log('Fail in the ezxamination');
        }
        else if(grade>=33 && grade<=55)
        {
            console.log('Your Grade is B -');
        }
        else if(grade>55 && grade<=60)
        {
            console.log('Your Grade is B');
        }
        else if(grade>60 && grade<=65)
        {
            console.log('Your Grade is B +');
        }
        else if(grade>65 && grade<=75)
        {
            console.log('Your Grade is A-');
        }
        else if(grade>75 && grade<=80)
        {
            console.log('Your Grade is A');
        }
        else if(grade>80 && grade<=100)
        {
            console.log('Your Grade is A +');
        }
        else
        {
            console.log('Invalid Input is here !! Get Valid input');
        }
*/

        // for using grade in functions

        function amar_grade(grade){

            if(grade>=0 && grade <=32)
            {
                return ('Fail in the ezxamination');
            }
            else if(grade>=33 && grade<=55)
            {
                console.log('Your Grade is B -');
            }
            else if(grade>55 && grade<=60)
            {
                console.log('Your Grade is B');
            }
            else if(grade>60 && grade<=65)
            {
                console.log('Your Grade is B +');
            }
            else if(grade>65 && grade<=75)
            {
                console.log('Your Grade is A-');
            }
            else if(grade>75 && grade<=80)
            {
                console.log('Your Grade is A');
            }
            else if(grade>80 && grade<=100)
            {
                console.log('Your Grade is A +');
            }
            else
            {
                console.log('Invalid Input is here !! Get Valid input');
            }
        }
        amar_grade(45);
        amar_grade(75);
        amar_grade(65);
        amar_grade(125);
        console.log(amar_grade(20));