// Console log to check if script is linked properly
console.log("Hello World");

// Registered planets array
let registeredPlanets = ["Mercury", "Venus", "Earth", "Mars"];
console.log(registeredPlanets);

// Function to add a planet
function addPlanet(array, planet) {
    if (typeof planet === "string") {
        array.push(planet);
        return array;
    } else {
        return "Incorrect Input Type";
    }
}

// Invoke addPlanet function
console.log(addPlanet(registeredPlanets, "Jupiter"));

// Function to delete the last planet
function deletePlanet(array) {
    if (array.length > 0) {
        array.pop();
        return array;
    } else {
        return "No planets registered.";
    }
}

// Invoke deletePlanet function
console.log(deletePlanet(registeredPlanets));

// Function to add a planet at the beginning using unshift()
function unshiftPlanet(array, planet) {
    if (typeof planet === "string") {
        array.unshift(planet);
        return array;
    } else {
        return "Incorrect Input Type";
    }
}

// Invoke unshiftPlanet function
console.log(unshiftPlanet(registeredPlanets, "Neptune"));

// Function to delete the first planet using shift()
function shiftPlanet(array) {
    if (array.length > 0) {
        array.shift();
        return array;
    } else {
        return "No planets registered.";
    }
}

// Invoke shiftPlanet function
console.log(shiftPlanet(registeredPlanets));

// Function to replace a planet using splice()
function splicePlanets(array, planet, index) {
    if (array.length > 0) {
        array.splice(index, 1, planet);
        return array;
    } else {
        return "No planets registered.";
    }
}

// Invoke splicePlanets function
console.log(splicePlanets(registeredPlanets, "Saturn", 1));
