//promises & then example
const myPromise = new Promise((resolve,reject)=>{
    let foodready =true;

    if(foodready){
        resolve("Your food is ready!");
    }else{
        reject("Sorry,your food is not ready.");
    }
});

myPromise.then((message)=>{
    console.log(message);
});
//exercise 1 Downloading afile using .then()
const File = new Promise((resolve,reject)=>{
    let downloadComplete =true;
    if(downloadComplete){
        resolve("Download completed!")
    }else{
        reject("Download failed")
    }
});
File.then((message)=>{
    console.log(message);
});
//ex 2 payment using .catch()
const paymentPromise = new Promise((resolve,reject)=>{
let paymentSuccessful =false;
if(paymentSuccessful){
    resolve("Payment successful");
}else{
    reject("Payment failed");
}
});
paymentPromise
.then((message)=>{
    console.log(message);
})
.catch((error)=>{
    console.log(error);
});
//async and await example 
/*function getData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data received!");
        }, 2000);
    });
}

async function showData() {
    console.log("Loading...");

    const result = await getData();

    console.log(result);
}

showData();*/
//ex 3 get student result
function getExamResult(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Your score is 85!");
        },1000)
    });
}
async function showExamResult(){
    console.log("Loading...");
    const RT =await getExamResult();
    console.log(RT);  
};
 showExamResult();
 //EX 4 ERROR HANDLING IN ASYNC AND AWAIT
 function downloadFile(){
    return new Promise((resolve,reject)=>{
        reject("Download failed!");
    });}
    async function startDownload(){
        try{
            const result =await downloadFile();
            console.log(result);
        }catch(error){
            console.log(error);
        }
         
    };  
 
 startDownload();
 //final combination challenge
 function checkAge(){
    return new Promise((resolved,rejected)=>{
        let age =22;
        if(age>=18){
            resolved("access granted!");
        }else{
            rejected("access denial");
        };

    });
 }
 async function verifyAge(){
    try{
        const result = await checkAge();
        console.log(result);
    }catch(error){
        console.log(error)
    }
 };
 verifyAge();