

//switch case in simply ... 

var day = 'saterday';

     switch (day){
          case 'saterday' :
              console.log('This is the start the day');
              break;
          case 'sunday' :
              console.log('This is the  2nd the day');
              break;
          case 'monday' :
              console.log('This is the beautiful day');
              break;
          case 'tuesday' :
              console.log('This is my birthday');
              break;
          case 'wednesday' :
              console.log('Thsi day is too long');
              break;
          case 'thusday' :
              console.log('This is half the day');
              break;

          case 'friday' :
              console.log('This is mohan victory of the day');
              break;

          default :
          console.log('Invalid input of the day');
      }


// switch case for functional method

function day_calc(day){
    switch (day){
        case 'saterday' :
           return ('This is the start the day');
            break;
        case 'sunday' :
            return('This is the  2nd the day');
            break;
        case 'monday' :
            return('This is the beautiful day');
            break;
        case 'tuesday' :
            return('This is my birthday');
            break;
        case 'wednesday' :
            return('Thsi day is too long');
            break;
        case 'thusday' :
            return('This is half the day');
            break;

        case 'friday' :
            return('This is mohan victory of the day in muslim');
            break;

        default :
        return('Invalid input of the day');
    }
}

// day function calling method
console.log(day_calc('friday'));
console.log(day_calc('red letter day'));

