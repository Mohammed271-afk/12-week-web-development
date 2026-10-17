const student ={
    name :"ali",
    age: 21,
    skill : "Web development"
};
console.log(student.name);
student.age++;
console.log(student.age);
console.log(student.skill);
//stringify
const product ={
    name:"burger",
    price:150
};
const result = JSON.stringify(product);
console.log(typeof product );
console.log(typeof result );
//parse
const text = '{"name":"Sara","age":20}';
const data = JSON.parse(text);
console.log(data.name);
//exercise
const text2 ='{"name":"dawit","age":23}';
const copy = JSON.parse(text2);
copy.age++;
console.log(copy.name);
console.log(copy.age);
//final challenge
const student2={name:"Sara",age:20};
const text3 =JSON.stringify(student2);
const copy2 = JSON.parse(text3);
copy2.age++;
console.log(typeof text3);
console.log(student2.age);
console.log(copy2.age);