const products =[

    {name:'iphone',price:100000,color:'skyblue'},
    {name:'iphone_10_pro',price:120000,color:'purple'},
    {name:'samsang',price:60000,color:'grey'},
    {name:'Android',price:8000,color:'black'},
    {name:'Appale',price:20000,color:'yellow'},
    {name:'iphone4',price:49000,color:'skyblue'},
    {name:'iphone5',price:69000,color:'skyblue'}

]


function matching_product(products,search){

    const match= [];
    for(const product of products)
    {
      //console.log(product); 
      pname = product.name;
      //console.log(pname);
      if(pname.indexOf(search)!=-1)
      {
        //console.log(pname + ' ' +product.price); 
        match.push(pname + ' ' +product.price);
      }
    }
    return match;
}

console.log(matching_product(products,'a'));

