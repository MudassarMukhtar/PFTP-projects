// Function

// noraml functio
//parameters,arguments
function  sum(a,b){
    return a+b;
}
console.log(sum(3,4));

// arrow function
const mul=(a,b)=>{
    return a*b;
}
console.log(mul(3,4));

// Conditions

let condition=(a,b)=>{
    if(a>b){ 
        return a*b;
    }else{
        return "a is less than be";
    }
   
}
console.log(condition(3,4));

// TURNERY OPRATOR

let turnery=(a,b)=>{

    return  ( a>b)? a*b : "a is less than be";  
}
console.log(turnery(5,4));

// switch
switch(a){
    case 5:
        return a+b;
        break;
    case 10:
        return a*a*a;
        break;
    default:
        return "invalid value";
}

// LOOPS
// for =>range define
let j=0;
for(i=0;i<=10;i++){
    j+=i;
}
return j;
// while =>certen condition occurs
let k=0;
while(k<=5){
    j+=k;
    k++;
    return j;
}
// do-while => must run one time
do{
    console.log("hello")
}while(a<=5)