/*********************************************************************************

		problem 2 :totalSales

*****************************************************************************************/

function totalSales(shirt,pants,shooe){

  
    // positive number quantity

    if(shirt<0 || pants<0 || shooe<0){
        return ('please input the positive number of quantity');
    }

    // string value check

    else if(typeof(shirt)=='string' || typeof(pants)=='string' || typeof(shooe)=='string')
    {
        return 'string input ,,, its not valid ! '
    }

     // no sells in the shop 

    else if(shirt==0 && pants ==0 && shooe ==0)
    {
        return ('Sorry Sir You are selecting zero quantity of cloths');
    }

   else {

       //price of one of each pices

    const shirt_price  =100;
    const pants_price  =200;
    const shooe_price  =500;

    var total_sells_price = (shirt*shirt_price)+(pants*pants_price)+(shooe*shooe_price);

    return total_sells_price; }

}

// quantity of each cloths 

var shirt_quantity  = 10;
var pants_quantity  = 1;
var shooe_quantity  = 1;

//function call and parameter passing
const grand_total_sells = totalSales(shirt_quantity,pants_quantity,shooe_quantity);

//show the total sells
console.log('Total sells : ',grand_total_sells);