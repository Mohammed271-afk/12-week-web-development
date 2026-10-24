const student ={
   name :"Mohammed",
   age :22
 }; 

 const studentxt = JSON.stringify(student);
 console.log(studentxt);

 const studentps =JSON.parse(studentxt);
 console.log(studentps.name);
 console.log(studentps.age);

const heading = document.getElementById("#info");
    heading.textContent="I am learning Dom";
    console.log(heading.textContent);

 const message = document.querySelecter("#title");
  message.textContent =" i am trying my best";
  console.log(message.Content)  ; 

const info = document.querySelector("#info");
info.textContent = "I am learning JavaScript";

const title = document.querySelector("#title");
title.textContent = "DOM Practice";

const heading1 = document.querySelector(".student");
heading1.textContent = "My name is Mohammed";

const paragraph1 = document.querySelector(".course");
paragraph1.textContent = "I am learning Web Development";

console.log(info.textContent);
console.log(title.textContent);
console.log(heading1.textContent);
console.log(paragraph1.textContent);

const skills = document.querySelectorAll(".skill");

skills.forEach(function(skill) {
    skill.textContent += " — I am improving!";
});
