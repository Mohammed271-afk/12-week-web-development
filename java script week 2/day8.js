//fetch multiple users
//example 1
async function getUsers(){
    try{
   const response =await fetch("https://jsonplaceholder.typicode.com/users") ;
   if(!response.ok){
    throw new error("response failed");
   }    

   const users = await response.json();
   console.log(users);
    }catch(error){
        console.log("error:",error.message);
    }
}
getUsers();
//exercise 1

async function getFirstThreeUsers() {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
            throw new Error("Response failed");
        }

        const data = await response.json();

        for (let i = 0; i < 3; i++) {
            console.log("Name:", data[i].name);
            console.log("Email:", data[i].email);
        }
    } catch (error) {
        console.log("ERROR:", error.message);
    }
}

getFirstThreeUsers();
//for...of
async function getUserEmails(){
   try{ const response = await fetch("https://jsonplaceholder.typicode.com/users");
    console.log(response);
    if(!response.ok){
        throw new Error ("response failed",error);
    }
      const data = await response.json();
        console.log(data);
        for(const user of data.slice(0,5)){
            console.log(user.email);
        }
}catch(error){
    console.log('error happened');
}}
getUserEmails();
//3

async function getCompanyUsers() {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );
        if (!response.ok) {
            throw new Error("Response failed");
        }
        const data = await response.json();
        const companyUsers = data.filter(
            user => user.name.startsWith("C")
        );
        for (const user of companyUsers) {
            console.log(user.name);
        }
    } catch (error) {
        console.log("Error happened:", error.message);
    }
}
getCompanyUsers();

//Handling API errors

async function getInvalidUser() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/999");

        if (!response.ok) {
            throw new Error("User not found");
        }

        const data = await response.json();
        console.log(data);

    } catch (error) {
        console.log(error.message);
    }
}

getInvalidUser();
/*User Analyzer
Practice project · JavaScript · Fetch API
Write a function named analyzeUsers() that does the following:
1. Fetches all users from https://jsonplaceholder.typicode.com/users.
2. Checks response.ok and throws an error if the request fails.
3. Converts the response to JSON.
4. Uses .filter() to select users whose names start with "C".
5. Uses a for...of loop to print each matching user's name and email.
6. Uses try...catch to handle errors */

async function analyzeUsers() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        if (!response.ok) {
            throw new Error("Failed to fetch users");
        }

        const users = await response.json();

        const filteredUsers = users.filter(user => user.name.startsWith("C"));

        for (const user of filteredUsers) {
            console.log(user.name, user.email);
        }

    } catch (error) {
        console.log(error.message);
    }
}

analyzeUsers();


