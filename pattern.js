// for(let i=1;i<=4;i++){
  
    
//     for(let j=1;j<=i;j++){
//         console.log("*");
//         console.log("\n");
//     }
  
// }

// area of rightangle triangle
// let base=5;
// let height= 10;
// let area = (base *height)/2;
// console.log(area);

// for regular triangle
// let a= 10;
// b=5;
// c=10;
// let area = (a+b+c)/2;
// console.log(area);


let num=(a)=> a%2===0? "even" :"odd";    //arrow function using ternary operator
console.log(num(5));

let num= 5;
let result = num%2==0 ? "even" : "odd";   
console.log(result);

//using function
function num(test) {    
    let result= (test%2==0)?"even" : "odd";
    console.log(result);
}
num(8);


//using if else
const value=()=>{
    let num =7;
    if(num%2==0){
        console.log(`even`);
    }else{
        console.log(`result(odd)`);
    }
}
value();