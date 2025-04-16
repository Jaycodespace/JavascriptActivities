console.log("Hello");

// Correct JSON object example
let place = {  // Renamed from location to place
    "city": "Quezon City",
    "province": "Metro Manila",
    "country": "Philippines"
};
console.log(place);

// Correct JSON object with an embedded array
let places = {
    "cities": [     
        { "city": "Quezon", "province": "Metro Manila", "country": "Philippines" },
        { "city": "Cebu", "province": "Cebu", "country": "Philippines" },
        { "city": "Makati", "province": "Metro Manila", "country": "Philippines" }
    ]
};
console.log(places);

// Convert JavaScript object to JSON string
console.log(JSON.stringify(places, null, 2)); // Pretty print JSON

// JSON.stringify() Example with an array
let batchesArr = [{ batchName: "Batch X" }, { batchName: "Batch Y" }];
console.log(typeof batchesArr);
console.log(typeof JSON.stringify(batchesArr)); 
console.log(JSON.stringify(batchesArr)); 


let data = JSON.stringify({
    name: "John",
    age: 31,
    address: {
        city: "Manila", 
        country: "Philippines"
    }
});

console.log(data);

// JSON.parse

let parseData = JSON.parse(data)
console.log("This is after the parse method: ");
console.log(parseData);

let stringifiedObject = {"name" : "John", "age" : "31"};
console.log(stringifiedObject);