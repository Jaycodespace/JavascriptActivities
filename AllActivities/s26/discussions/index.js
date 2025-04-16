const blueButton = document.querySelector("#blueButton");
const greenButton = document.querySelector("#greenButton");
const text = document.querySelector("#text");

// Add event listeners
blueButton.addEventListener("click", () => {
    text.style.color = "blue";
});

greenButton.addEventListener("click", () => {
    text.style.color = "green";
});
    