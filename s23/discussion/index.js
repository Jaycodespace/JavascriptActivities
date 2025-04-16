
/*
//console.log("Hello World");

const firstNum = 8 ** 2;
console.log(firstNum);

const secondNum = Math.pow(8, 2);
console.log(secondNum);
console.log(Math);

const number = [2,19,13,4,5];
console.log(number);

const transformedNumber =[];

for (let i = 0; i < number.length; i++) {
    if (number[i] % 2 === 0) {
        transformedNumber[i] = Math.pow(number[i], i);
    } else {
        transformedNumber[i] = Math.pow(number[i], i + 1);
    }
}

console.log(transformedNumber);

let name = "Gwapo";

let message = "Hello " + name + "! Welcome to programming";
console.log("Message without template literals: " + message);

//Template literals
// uses backticks (``)
message = `Hello ${name}! Welcome to programming`
console.log(message);

const anothermessage = `
	${name} attended a math competition
	He won 1st place
		solution of ${firstNum} 
	`;

console.log(anothermessage);	

const interestRate = .1;
const principal = 1000;

console.log(`Total Rate: ${interestRate * principal}`);

const students = [
    { name: "Gwapo", age: 20, hobby: "Sleeping" },
    { name: "Gwapo2", age: 21, hobby: "Snoring" },
    { name: "Gwapo3", age: 22, hobby: "Dreaming" }
];
console.log(students);
for (let i = 0; i < students.length; i++) {
    console.log(`${students[i].name} is ${students[i].age} years old.\nThey enjoy ${students[i].hobby}.\n`);
}

const fullName = ["John", "Michael", "Doe"];
const [firstName, middleName, lastName] = fullName

console.log(firstName);
console.log(middleName);
console.log(lastName);
console.log(`Hello ${firstName} ${middleName} ${lastName}`);

let person = {
	givenName: "Ryan",
	maidenName: "Jay",
	familyName: "Timagos"
};

console.log(person.givenName);
console.log(person.maidenName);
console.log(person.familyName)
console.log(`Hello ${person.givenName} ${person.maidenName} ${person.familyName}`);

let {givenName, maidenName, familyName} = person;

console.log(givenName);
console.log(maidenName);
console.log(familyName);

console.log(`Hello ${givenName} ${maidenName} ${familyName}`);

function getFullName({givenName,maidenName,familyName}){
	console.log(`${givenName} ${maidenName} ${familyName}`);
}

getFullName(person);

/*
    Mini Activity #3 (10 mins)

    1. Create an object named employee with the following properties:
        - fullName (John Doe)
        - department (Software Engineering)
        - projects (array of project objects, each with title and duration in months)
            - title: "Inventory System", duration: 6 
            - title: "Mobile Food Delivery App", duration: 8
            - title: "E-commerce Website", duration: 12
        - skills ("JavaScript", "UI/UX", "AWS Cloud Computing")
    2. Destructure the following values from the employee object:
        - Extract fullName and department directly.
        - Extract the first project’s title and duration.
        - Extract only the last skill from skills using array destructuring.
    3. Swap the first and last project in the projects array using destructuring.
    4. Print the extracted values and the updated projects array to the console.

    // Expected Output

    Employee Name: John Doe
    Department: Software Engineering
    First Project: Inventory System (6 months)
    Last Skill: AWS Cloud Computing

    Updated Projects Array:
    [
    { title: "E-commerce Website", duration: 12 },
    { title: "Mobile Food Delivery App", duration: 8 },
    { title: "Inventory System", duration: 6 }
    ]

*/

const employee = {
    fullName: "John Doe",
    department: "Software Engineering",
    projects: [
        { title: "Inventory System", duration: 6 },
        { title: "Mobile Food Delivery App", duration: 8 },
        { title: "E-commerce Website", duration: 12 }
    ],
    skills: ["JavaScript", "UI/UX", "AWS Cloud Computing"]
};

const { fullName, department } = employee;
const { title: firstProjectTitle, duration: firstProjectDuration } = employee.projects[0];
const [ , , lastSkill ] = employee.skills;

[employee.projects[0], employee.projects[2]] = [employee.projects[2], employee.projects[0]];

console.log(`Employee Name: ${fullName}`);
console.log(`Department: ${department}`);
console.log(`First Project: ${firstProjectTitle} (${firstProjectDuration} months)`);
console.log(`Last Skill: ${lastSkill}`);

console.log("\nUpdated Projects Array:");
console.log(employee.projects);