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
async function getCompanyUsers() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        if (!response.ok) {
            throw new Error("Failed to fetch users");
        }

        const users = await response.json();

        // Filter users whose company name includes "Group"
        const companyUsers = users.filter(user =>
            user.company.name.includes("Group")
        );

        // Extract only their names
        const names = companyUsers.map(user => user.name);

        console.log(names);

        // Find the first user whose city is London
        const londonUser = users.find(user =>
            user.address.city === "London"
        );

        if (londonUser) {
            console.log(londonUser.name);
        } else {
            console.log("No user found in London");
        }

    } catch (error) {
        console.log(error.message);
    }
}

getCompanyUsers();