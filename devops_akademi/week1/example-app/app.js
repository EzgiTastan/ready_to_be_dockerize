console.log("Hello, world");

var my_name = "Gizem";
var age = 24;
let isMarried = false;
console.log(isMarried);

//let denen şeyi sonra değiştirebilirsin. var'lar değiştirilmeyecek değişkenlerdir
//const da var. değiştirilmeyen değişkenler. const ile var farkı?

console.log(my_name);
console.log(age);

var number1 = 10;
var number2 = 20;

console.log(number1 + number2);

if (age >=18){
    console.log("You are an adult");
} else {
    console.log("You are a child");
}

//object
const person = {
    name: "Gizem",
    age: 17,
    isMarried: false,
};
console.log(person);
console.log(person.name);
console.log(person.age);
console.log(person.isMarried);

//function
function sayHello(){
    console.log("Hello, world!!!");
}

function computeSum(number1, number2) {
    return number1 + number2;
}

sayHello();

const total = computeSum(12,244);
console.log(total);