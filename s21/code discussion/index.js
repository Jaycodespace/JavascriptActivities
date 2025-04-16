//console.log("Hello World")
/*
//create objects
let cellphone = {
    name: 'Iphone 16',
    manufacturedDate: '2024',  // Fixed typo
};

console.log("Result using object literals {}:");
console.log(cellphone);
console.log(typeof cellphone); // Expected output: object

// Corrected console.log usage
console.log("Dot notation: " + cellphone.name);
console.log("Dot notation: " + cellphone.manufacturedDate);

// Update the manufactured date
cellphone.manufacturedDate = "9-20-2024";

// Log the updated value
console.log("Updated manufactured date: " + cellphone.manufacturedDate);

//undefined
console.log("Dot notation: " + cellphone.price);

let newCellphone = cellphone
newCellphone.name = "Samsung24"
console.log(cellphone.name)

let car = {};
console.log(car);

car.name = 'Honda Civic'

console.log("Result from adding properties using dot notations")
console.log(car['name']);

car['Manufactured Date'] = '2-01-20'

console.log(car.manufacturedDate);
console.log(car["Manufactured Date"]);

//Arrays inside objects

let cart = {
	userUd: '2000-1A',
	username: 'michaelShawn',
	products: ['Bread', 'Cheese','Lettuce'],
	dateCreated: '03-10-2025'
}

console.log(cart.products)
cart.products.pop()

console.log(cart.products);
console.log(cart.products.length);

*/

let student = {
	name: 'Alice',
	age: 20,
	course: 'Computer Science',
	grades: [85,90,78],
}

console.log(student);
student.hobbies = ['Basketball', 'Volleyball']

student.course = 'Software Engineering';
delete student.age;
student.grades.push(95);

console.log(student);