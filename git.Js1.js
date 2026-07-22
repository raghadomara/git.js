//Q1
var x="123";
y=Number("123")+7;
console.log(y)
//Q2
var z=0;
console.log(Boolean(z));
//Q3
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        continue;
    }
    console.log(i);
}
//Q4
let number=[1,2,3,4,5]
let evenNumber=number.filter(num => num %2===0);
console.log(evenNumber);

//Q5
let arr1=[1,2,3];
let arr2=[4,5,6,7];
let mergedArray=[...arr1, ...arr2]
console.log(mergedArray);

//Q6
let day=(3)

switch(day){
    case 1:
        console.log("Saturday");
        break;
    
    case 2:
        console.log("Sunday");
        break;
    case 3:
        console.log("Monday");
        break;    
    case 4:
        console.log("Teusday");
        break;
    
    case 5:
        console.log("Wednesday");
        break;
    case 6:
        console.log("Thursday");
        break;
    case 7:
        console.log("Friday");
        break;           
default:
console.log("invalid day");
    

}
//Q7
let strArray=["A","R","J"]
let length=strArray.map(word =>word.length)
console.log(length)

//Q8
let r=15;
if (r%3===0 && r%5===0){ console.log("Divisible by both");}

//Q9
const squar=(numm)=>{
    return numm*numm;
};
console.log(squar(6));

//Q10

const person = (name, age) => {
    return `${name} is ${age} years old`;
};

console.log(person("Raghad", 21)); 
 
//Q11
 function sum(...numbers) {
    let total = 0;

    for (let nuM of numbers){
        total += nuM;
    }

    return total;
}

console.log(sum(1, 2, 3, 4, 5));

//Q12 
function myPromis(){
    return new Promise(( resolve)=>{ 
         setTimeout(()=>{
            resolve ("success");
         }, 3000);
    });
 }
 myPromis().then(result=>console.log(result));

 //Q13
 function largestNumber(arr) {
    return Math.max(...arr);
}

console.log(largestNumber([1, 3, 7, 2, 4]));

//Q14
function getKey(obj){
    return Object.keys(obj);
}
const peapole={
name: "John",
 age: 30
};
console.log(getKey(peapole));
//Q15
function splitWords(str) {
    return str.split(" ");
}
console.log(splitWords("The quick brown fox"));

//Essay Qs

//1.for Each hasn't a break or continue but for of has
//for Each when i waa=nt to have more control over each element inside but for or when i want to controle the loop more

//2.Hoisting javascript moves declarations to the top of their scope before execution.
//temporal Dead Zone the time before a let or const variable is initialized, where accessing it causes a ReferenceError.

//3.==comparison operator (value vs value) === comparison operator (value & datatype)

//4.

//5. conversion is somthing i do by using built in functions to convert things but coercion is somthing that js deos by itself
// conv like String or Bolean but coer like 5+"4" the js will understand and convert 4 from str into a number