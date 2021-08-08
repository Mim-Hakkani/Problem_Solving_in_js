
// check simple variable in js

let name = "Mim";
let age  =26;
let male = true;
console.log('Show Normaly');
console.log('Your Name : ',name,'Your age',age,'Cheak male:',male);

// update name and variale and show it

 name = "Hakkani";
 age = 25;
 console.log('Show the output in udate styles');
 console.log('Update Name : ',name,'New Age : ',age,male);

 //use function to show the name 

 function student(name,age){

    console.log('using functions to return this variables');
    return console.log(name,age);
    
 }
 student('golam Hakkani',28)

 //use array to show this name,roll,dept,university,faculity

 let student_details = ['Gm.Mim',150132,'cse','pust','engineering'];
 console.log( 'using array to show the variables'); 
 for (const std_datils of student_details) {
    console.log(std_datils);
 }
 