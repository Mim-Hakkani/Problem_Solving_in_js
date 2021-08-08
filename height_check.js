/*
 take input in 
   1. height < 150
   show output in (dwarf)
      2. height == 150
   show output in (Average Height)
      3. height > 150
   show output in (Tall)

*/

function height(take_height_input){

    if(take_height_input>=0 && take_height_input<150)
    {
        return 'You are input is dwarf person';
    }
    else if(take_height_input==150)
    {
        return 'You are input is average person';

    }
    else if(take_height_input>=165 && take_height_input<300)
    {
        return 'You are input is Taller person';
    }
    else{
        return 'You are input in Invalid person input !!';
    }


}
 
console.log(height(150)); 
console.log(height(120)); 
console.log(height(175)); 
console.log(height(358)); 

