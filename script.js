//1
const name = "Albin Milton";
const role = "Software Engineer";

const introduction = document.getElementById("intro_text");
introduction.textContent = `Hello, I’m ${name}, a ${role}`;

//2
const skillSection = document.getElementById("skills");
const skills = ["JavaScript", "CSS", "HTML", "Python"];

const skillList = document.createElement("ul");
for (const skill of skills) {
  const listItem = document.createElement("li");
  listItem.textContent = skill;
  skillList.appendChild(listItem);
}
skillSection.appendChild(skillList);

//3
const aboutMe = {
  name: "Albin Milton",
  age: 18,
  location: "Stockholm",
};
const aboutSection = document.querySelector(".about-section p");
function displayAboutMe(aboutMe) {
  aboutSection.textContent = `My name is ${aboutMe.name}, 
  I'm ${aboutMe.age} years old and 
  I live in ${aboutMe.location}.`;
}
displayAboutMe(aboutMe);

//4
const form = document.getElementById("myForm");
const input_name = document.getElementById("inputName");
const input_email = document.getElementById("inputEmail");
const input_phone = document.getElementById("inputPhoneNumber");
const formLog = document.getElementById("formLog");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  if (
    input_name.value === "" ||
    input_email.value === "" ||
    input_phone.value === ""
  ) {
    formLog.textContent = `Form not submitted, fill in all fields`;
    console.log("Form not submitted, fill in all fields");
    return;
  }
  formLog.textContent = `Form submitted`;
  console.log("Form submitted");
});
