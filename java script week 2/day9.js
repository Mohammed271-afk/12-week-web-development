async function getFirstThreeUsers(){
   try{
     const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if(!response.ok){
        throw new Error("response failed");
    }
    const users = await response.json();
   
   for(let i=0;i<3;i++){
    console.log(users[i].email);
   }
}catch(error){
console.log("error happened",error.message);
   }
}
getFirstThreeUsers();
//find()and filered()
async function searchUsers(){
 try{
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if(!response.ok){
        throw new Error("Response failed ");
    }
    const users = await response.json();

    const ebiz = users.filter(user=>user.email.endsWith(".biz"));
    console.log("names end with . bitz :",ebiz.map(user=>user.email));

const C1 = users.find(user => user.username.startsWith("B"));
console.log("First matching user:", C1?.name);

 }  catch(error){
    console.log("error happened",error.message);
 }
};

searchUsers();
//combination 
//age <18
const users = [
    { name: "Ali", age: 17 },
    { name: "Sara", age: 22 },
    { name: "Mimi", age: 25 },
    { name: "Dawit", age: 16 },
    { name: "Abel", age: 30 }
];
const minors= users.filter(user=>user.age<18);
const abel =users.find(user=>user.name ==="Abel");

console.log(minors);
console.log(abel);
//error handling 404
async function getUser(){
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
    if(!response.ok){
        throw new Error ("Request failed");
    }
    const users = await response.json();
    console.log(users.name);
    console.log(users.email);
    }catch(error){
        console.log(error.message);
    };
};
getUser();
//final combined challenge
async function getUsers() {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );
        if (!response.ok) {
            throw new Error("Failed to fetch users");
        }
        const users = await response.json();
        const filteredUsers =users.filter(user=>user.name.startsWith("C"));
        console.log(filteredUsers);
        const firstUser=users.find(user=>user.name.startsWith("C"));
        console.log(firstUser.name);
    } catch (error) {
        console.log(error.message);
    }
}
getUsers();