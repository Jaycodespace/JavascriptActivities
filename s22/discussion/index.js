console.log("S22 discussions");



/*
Objects Recall:
	1. Objects literal:
	Syntax:
		let objectA = {
			KeyA: valueA,
			KeyB: valueB,
		}

	2. Constructor function
	Syntax:
		-Useful when we need to create several objects
		with different values but same properties
	Syntax:
		function ObjectName(keyA, keyB) {
			this.keyA = keyA;
			this.keyB = keyB;
		}

*/

function Laptop(name, manufactureDate){
	this.name = name;
	this.manufactureDate = manufactureDate;
}

let laptop = new Laptop('Lenovo', 2008);
console.log(laptop);

let myLaptop = new Laptop('MacBook Air', 2020);
console.log(myLaptop);

// no new keyword
//undefined because there is no return statement in the function
let oldLaptop = Laptop("Portal R2E CCMC", 1980);
console.log(oldLaptop);

/*
	Object Methods:
	-  Methods are functions within an object. They can be accessed
	and invoked from an object.
*/

let person = {
	name: "John",

	talk: function() {
		console.log("Hello my name is " + this.name);
	}
}

person.talk();	

person.walk = function (){
	console.log(this.name + " walked 25 steps forward.");
}

console.log(person)
person.walk();


let friend = {
    firstName: 'Ryan',
    lastName: 'Timagos',
    address: 'Universe',

    introduce: function() {
        console.log("Hello, my name is " + this.firstName + " " + this.lastName);
    }
};
console.log(friend);
friend.introduce();

//Object methods can also receive arguments much like regular functions
friend.greet = function(object) {
	console.log("Hi " + object.name + "!");
} 

friend.greet(person);

// Real World Application of Objects - Constructor with Methods
function Student(fullName, email,age){
	this.fullName = fullName;
	this.email = email;
	this.age = age;
	this.subjects = [];
	//methods
	this.enroll = function(subjectName){
		this.subjects.push(subjectName);
		return "Enrolled in " + subjectName;
	}

	this.introduction = function () {
		return "Hello! I am " + fullName;
	}
}

let student1 = new Student("Jeffrey Doe", "jeffdoe@mail.com",20);
let student2 = new Student("Jonh Smith", "johnsmith@mail.com",18);


console.log(student1);
console.log(student2);
