/******************************************************************************************************
			
			problem3 : delevery Cost

******************************************************************************************************/

function deliveryCost(tshirt_quantity){

   
    // input validation and check it if give negative value
  

if(tshirt_quantity<0)
{
    return 'please input the validate tshirt_quantity'
}

      // input validation and check it if give zero or no need or no delevery

else if(tshirt_quantity==0)
{
    return 'Sir , Input Zero Quantity and Zero Delevery Cost'
}

//if null string value
else if(typeof(tshirt_quantity) == 'string'){
    return 'Invalid Input not string give positive number'
}

else{

          if(tshirt_quantity>0 && tshirt_quantity<=100)
          {
              const delevary_cost =tshirt_quantity*100;
              return delevary_cost; 
          }


          else if(tshirt_quantity>100 && tshirt_quantity<=200)
          {
              
              const Rest_shirt =(tshirt_quantity-100);
              const Rest_shirt_del_cost =Rest_shirt*80;
              const first_cost = (tshirt_quantity - Rest_shirt) *100;
              const Total_delevary_cost =first_cost+Rest_shirt_del_cost;

              return Total_delevary_cost;

          }

          else {

          
              const first_cost = 100 *100;
              const Rest_shirt_del_cost =100*80;
              const last_d_cost =(tshirt_quantity-200)*50;
              const Final_cost =last_d_cost+first_cost+Rest_shirt_del_cost;

              return Final_cost;

          }
     
}


}

//quantity of tshirt
const tshirt_quantity     =205 ;

//function call and parameter pass
const total_delevery_cost = deliveryCost(tshirt_quantity);

//total tshirt delevery cost
console.log('Total tshirt Delevery Cost :',total_delevery_cost);