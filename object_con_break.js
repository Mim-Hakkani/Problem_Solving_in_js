const products =[

    {name:'iphone',price:100000,color:'skyblue'},
    {name:'iphone_10_pro',price:120000,color:'purple'},
    {name:'samsang',price:60000,color:'grey'},
    {name:'Android',price:8000,color:'black'},
    {name:'Appale',price:20000,color:'yellow'},
    {name:'iphone4',price:49000,color:'skyblue'},
    {name:'iphone5',price:69000,color:'skyblue'}

]

// continue 
for (const product of products) {
    if(product.price<50000)
    {
        
        continue;
    }
    console.log(product);
}


// break point

for (const product of products) {
    if(product.price<50000)
    {
        
        break;
    }
    console.log(product);
}