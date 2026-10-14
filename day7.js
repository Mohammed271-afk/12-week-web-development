fetch("https://jsonplaceholder.typicode.com/users/1")
.then(response => response.json())
.then(data=>{
    console.log(data);
})
.catch(error=>{
    console.log("some thing went wrong",error);
});
fetch("https://jsonplaceholder.typicode.com/posts/1")
.then(response=>response.json())
.then(data=>{
console.log(data.title);
})
.catch(error=>{
    console.log("error",error)
});
fetch("https://jsonplaceholder.typicode.com/posts/2")
.then(response=>response.json())
.then(data=>{
    console.log(data.title);
    console.log(data.body);
})
.catch(error=>{
    console.log("something went error",error);
});
async function getUser(){
    try{
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1")

const data = await response.json()
console.log(data.name);
console.log(data.email);
}
catch(error){
    console.log("error",error);
}}
getUser();
async function getSecondUser(){
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users/2")
    
const data =await response.json();
console.log(data.name);
console.log(data.email);
console.log(data.address.city);
}
catch(error){
    console.log("error",error)
}};
getSecondUser();

async function getPost() {
    try {
        const response = await fetch(
            "http://jsonplaceholder.typicode.com/posts/1"
        );

        if (!response.ok) {
            throw new Error("Request failed");
        }

        const data = await response.json();
        console.log(data.title);
    } catch (error) {
        console.log("Error:", error.message);
    }
}

getPost();
