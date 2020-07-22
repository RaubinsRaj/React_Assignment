/*
function checkMaxNo(a,b){
    //return a>b ?  a+ " is Greater than "+b :  b+"  is greater than " +a;
}
console.log(checkMaxNo(5,10,15)); 
*/

function checkMaxNo(a,b,c){
    //var a,b,c;
    if(a>b && a>c){
        console.log(a + " Is maximum ");
    }
    else if(b>a && b>c){
        console.log(b +" Is maximum ");
    }
    else {
        console.log(c +" Is maximum ");
    }
}
checkMaxNo(45,35,30);
