//exercise 1 object
const  Laptop={
    Brand: "Dell",
    model: "Latitude 5410",
    ram: 8,
    price:500
};
console.log(Laptop);

//exercise Accessing object properties
console.log(Laptop.Brand);
console.log(Laptop.model);
//modifying objects
Laptop.ram=16;
Laptop.price=450;
//add new property
Laptop.color=("black");
console.log(Laptop);
//Lesson 2: Arrays of Objects exercise
const students =[
    {name: "abel", age :22,Score:85},
    {name: "hana",age : 21,Score: 90},
    {name: "dawit" ,age :23 ,Score :78},
];
console.log(students)
//ex2
console.log(students[0].name);
console.log(students[1].Score);
console.log(students[2].age);
students[0].Score=95;
console.log(students[0].Score)
//js array methods map
const numbers = [5, 10, 15, 20, 25];
const numx2= numbers.map(doubled=>doubled*2);
console.log(numx2);
console.log(numbers);
//filter()
const ages = [12, 18, 25, 16, 30];

const adults = ages.filter(age => age >= 18);

console.log(adults);
console.log(ages);
//reduce
const prices = [100, 200, 50, 150];

var total = prices.reduce((sum, price) => sum + price, 0);

console.log(total);
console.log(prices);
//final challenge
const scores = [45, 60, 80, 35, 50];

const passed = scores.filter(score => score >= 50);

const bonusScores = passed.map(score => score + 5);

var total = bonusScores.reduce((sum, score) => sum + score, 0);

console.log(passed);
console.log(bonusScores);
console.log(total);