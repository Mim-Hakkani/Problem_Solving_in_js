
//declare array 
var number = [10,20,30,40,50,60,70,80,90,100];

//show areary value 
console.log(number);

//array lenght 
arr_length = number.length
console.log(arr_length);

//push arr in last element

number.push(111);
console.log(number);

//push arr in first element 
number.unshift(1);
console.log(number);
console.log(number.length);

//remove arr in last element 
number.pop();
console.log(number);
console.log(number.length);

//remove arr in first element
number.shift();
console.log(number);
console.log(number.length);

//check index from last element or any elements
number.indexOf(100);
console.log(number.indexOf(100));

//change the value of fourth position 
number[3] = 45;
console.log(number);

//add value in seven position step 1: [remove 7 element and add number this position]

number
number.splice(7,1,66);
console.log(number);

/*
add value in seven position 
step 2: [not remove 7 element and add number this position]
*/
console.log(number);
number.splice(7,0,77);
console.log(number);
 console.log(number.length);

 //nice play with array thanks to all