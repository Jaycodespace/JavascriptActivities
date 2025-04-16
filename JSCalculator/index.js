let history = [];
let memory = null; 

const calculate = (operator) => {
    let result;
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);

    if (!num1 || !num2) {
        document.getElementById("result").innerText = 'Please enter a number';
        return;
    } else if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("result").innerText = 'Please enter a valid number';
        return;
    }

    if (operator === '+') {
        result = num1 + num2;
    } else if (operator === '-') {
        result = num1 - num2;
    } else if (operator === '/') {
        if (num2 === 0) {
            result = 'Cannot divide by zero';
        } else {
            result = num1 / num2;
        }
    } else if (operator === '*') {
        result = num1 * num2;
    }

    document.getElementById("result").innerText = `Result: ${result}`;

    const resultHistory = `${num1} ${operator} ${num2} = ${result}`;
    history.push(resultHistory);
    showHistory();
}

const memoryAdd = () => {
    const resultElement = document.getElementById("result");
    const resultText = resultElement.innerText.trim();

    const result = parseFloat(resultText.replace(/[^\d.-]/g, '')); 

    if (!isNaN(result)) {
        memory = result;
        alert("Memory Added");
    } else {
        alert("No valid result to store in memory.");
    }
}


// Recall result from memory
const memoryRecall = () => {
    if (memory !== null) {
        document.getElementById("num1").value = memory;
    } else {
        alert("No memory stored");
    }
}

// Clear memory
const memoryClear = () => {
    memory = null;
    alert("Memory cleared");
}

const showHistory = () => {
    const list = document.getElementById("historyList");
    let items = "";

    history.forEach(item => {
        items += `<li>${item}</li>`;
    });

    list.innerHTML = items;

    document.getElementById("clearHistory").disabled = history.length === 0;
}

const clearHistory = () => {
    history = [];
    document.getElementById("result").innerHTML = "Result";
    document.getElementById("historyList").innerHTML = "";
    document.getElementById("clearHistory").disabled = true;
}

const checkInput = () => {
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;
    let enable = false;

    if (num1 !== "" && num2 !== "") {
        enable = true;
    }

    document.getElementById("addButton").disabled = !enable;
    document.getElementById("minusButton").disabled = !enable;
    document.getElementById("multiplyButton").disabled = !enable;
    document.getElementById("divideButton").disabled = !enable;
}

const runCalculator = () => {
    document.getElementById("num1").addEventListener("input", checkInput);
    document.getElementById("num2").addEventListener("input", checkInput);

    document.getElementById("addButton").onclick = () => calculate('+');
    document.getElementById("minusButton").onclick = () => calculate('-');
    document.getElementById("multiplyButton").onclick = () => calculate('*');
    document.getElementById("divideButton").onclick = () => calculate('/');

    document.getElementById("clearHistory").onclick = clearHistory;
    document.getElementById("memoryAdd").onclick = memoryAdd;
    document.getElementById("memoryRecall").onclick = memoryRecall;
    document.getElementById("memoryClear").onclick = memoryClear;

    document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            calculate('+'); 
        }
        if (event.key === "+") {
            calculate('+');
        } else if (event.key === "-") {
            calculate('-');
        } else if (event.key === "*") {
            calculate('*');
        } else if (event.key === "/") {
            calculate('/');
        }
    });
}

document.addEventListener("DOMContentLoaded", runCalculator);
