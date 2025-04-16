console.log("Hello World");

let loot = ["gold", "silver", "bronze", "emerald", "diamond"];

loot.sort();
console.log("Sorted loot:", loot);

loot.reverse();
console.log("Reversed loot:", loot);

loot.copyWithin(0, loot.length - 2);
console.log("Loot after copyWithin:", loot);

loot.fill("unknown", loot.length - 3);
console.log("Final loot:", loot);


let numbers = [1, 2, 3, 4, 6, 8, 9, 10, 12, 13, 20, 25];

function findEvenNumber(arr) {
    if (arr.length === 0) {
        return "The array is empty.";
    }

    let isAllNumbers = arr.every(num => typeof num === "number");

    if (!isAllNumbers) {
        return "The array does not contain all numbers.";
    }

    let isAllPositiveIntegers = arr.every(num => Number.isInteger(num) && num > 0);

    if (!isAllPositiveIntegers) {
        return "The array does not contain all positive integers.";
    }

    return arr.filter(num => num % 2 === 0);
}

// Test cases for findEvenNumber
console.log("Message if the array is empty:");
console.log(findEvenNumber([]));

console.log("Message if the array does not contain all number data type:");
console.log(findEvenNumber([1, 2, 3, "25", 4]));

console.log("Message if the array does not contain all positive integers:");
console.log(findEvenNumber([1, 2, 3, -25, 4]));

console.log("Even numbers in the array:");
console.log(findEvenNumber(numbers));

function findIndex(arr, num) {
    if (!Array.isArray(arr)) {
        return "Error: First argument must be an array";
    }

    if (typeof num !== "number") {
        return "Error: Second argument must be a number";
    }

    return arr.indexOf(num);
}

console.log(findIndex({element1: 1, element2: 2, element3: 3}, 3));
console.log(findIndex(numbers, "3"));
console.log(findIndex(numbers, 3));
