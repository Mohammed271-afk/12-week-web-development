const appName ="User Analyzer";
let usercOUNT = 0;
function introduceUser(name,email){
 return   `i am ${name}  and my email is${email}`; 
}

async function getUser(){
try{
    const response = await fetch("https://jsonplaceholder.typicode.com/users")


    if(!response.ok){
throw new Error ("response failed");
}
const data = await response.json();

for (i=0;i<=2;i++){
console.log(data[i].name);
}

const names =data.map(user =>user.name);
console.log(names);

const cities =data.filter(user=>user.address.city.startsWith("S"));
console.log(cities);
introduceUser(data[0].name ,data[0].email);

const filtered =data.reduce((cities)=>{
    return cities;
},0);

console.log(filtered);

console.log(data[0].name);
console.log(data[0].email);
console.log(data[0].address.city);

}catch(error){
    console.log("error happend try later",error.message)
}
getUser();

};