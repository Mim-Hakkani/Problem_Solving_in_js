function axis_cordinate(a,b){
    if(a>0 && b>0)
    {
        return ('This is positive Cordinate');
    }
    else if(a<0 && b>0)
    {
        return ('This is second Cordinate');

    }
    else if(a<0 && b<0)
    {
        return ('This is Third Cordinate');

    }
    else if(a>0 && b<0)
    {
        return ('This is Fourth Cordinate');

    }
    else{
        return ('This is (0,0) Cordinate');
        
    }
}

console.log(axis_cordinate(+5,-10));
console.log(axis_cordinate(-5,-10));
console.log(axis_cordinate(+5,+10));
console.log(axis_cordinate(-5,+10));