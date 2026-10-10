//shift and unshift
let numbers = [10,20,30,40];
numbers.shift(0);
console.log(numbers);

//unshift()
let letter=["a","b","c"];
letter.unshift("d");
console.log(letter);

//loop
for(let i =1;i<=5;i++){
    console.log("I am learning javascript");
}
//exercise 1
for (let num= 1;num<=10;num++){
    console.log(num);
}
//array and loop combination exercise
let animal=["cat","dog","lion","rabbit"];
for(let i=0;i<animal.length;i++){
    console.log(animal[i]);
}
//cat and lion only exercise

let anim = ["cat", "dog", "lion", "rabbit"];

for (let i = 0; i < anim.length; i += 2) {
    console.log(anim[i]);
}

//map()exercise
const num=[10,20,30,40];
const numx3=num.map(function(number){
    return number*3;
});
console.log(numx3);

//filter exercise
const myarr=[4,15,8,22,10,30];
const bigmyarr=myarr.filter(function(myarr2){
    return myarr2>10;
});
console.log(bigmyarr);
//reduce
const red = [5, 10, 15, 20];

const total = red.reduce(function(sum, number) {
    return sum + number;
}, 0);

console.log(total);
//final challenge
const prices = [50, 120, 80, 200, 40];
const pro=prices.filter(function(myarr3){
    return myarr3>100;
});
console.log(pro);

const numx10=prices.map(function(number){
    return number+ number*0.1;
});
console.log(numx10);