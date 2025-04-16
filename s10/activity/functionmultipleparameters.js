// 1. Function to add two numbers
function addNum(a, b) {
    return a + b;
}
console.log(addNum(5, 15)); 

// 2. Function to subtract two numbers
function subNum(a, b) {
    return a - b;
}
console.log(subNum(25, 10)); 

// 3. Function to multiply two numbers
function multiplyNum(a, b) {
    return a * b;
}
console.log(multiplyNum(30, 4)); 

// 4. Function to divide two numbers
function divideNum(a, b) {
    if (b === 0) {
        return "Cannot divide by zero";
    }
    return a / b;
}
console.log(divideNum(120, 2)); 

// 5. Function to calculate the area of a circle
function getCircleArea(radius) {
    return Math.PI * Math.pow(radius, 2);
}
console.log(getCircleArea(16)); 

// 6. Function to calculate the average of four numbers
function getAverage(a, b, c, d) {
    return (a + b + c + d) / 4;
}
console.log(getAverage(81, 79, 89, 85)); 

// 7. Function to check if passed based on percentage
function checkIfPassed(score, total) {
    let percentage = (score / total) * 100;
    let isPassed = percentage >= 75;
    return isPassed;
}
console.log(checkIfPassed(8, 10));  

// ---------------------- Debugging the given code ----------------------

// Correcting the function register
function register(firstName, lastName, email, mobileNum) {
    return {
        firstName: firstName, 
        lastName: lastName, 
        email: email,
        mobileNum: mobileNum 
    };
}

let newUser = register("Lilo", "Pelekai", "lilostitch@gmail.com", "09276612409");
console.log(newUser); 

// Correcting the function createProduct
function createProduct(name, price, quantity) {
    return {
        name: name, 
        price: price,
        quantity: quantity 
    };
}

let newProduct = createProduct("Chocolate Bar", 200, 50);
console.log(newProduct); 

// Correcting the function createTeamArr
function createTeamArr(member1, member2, member3, member4, member5) {
    return [member1, member2, member3, member4, member5]; 
}

let newTeam = createTeamArr("Eugene", "Dennis", "Alfred", "Vincent", "Jeremiah");
console.log(newTeam); 
