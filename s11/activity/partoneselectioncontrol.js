/*
    2. Create a function called checkAverage which is able to receive 4 numbers as arguments calculate its average and log a message for  the user about their letter equivalent in the console.
        - add parameters appropriate to describe the arguments.
        - create a new function scoped variable called average.
        - calculate the average of the 4 number inputs and store it in the variable average.
        - research the use of Math.round() and round off the value of the average variable.
        - update the average variable with the use of Math.round()
        - console.log() the average variable to check if it is rounding off first.
        */

function checkAverage(num1,num2,num3,num4){
    let average = (num1+num2+num3+num4)/4;

    let rounded_average = Math.round(average);
    console.log(rounded_average);


let letter;
/*
    3. Add an if statement in the checkAverage function to check if the value of avg is less than or equal to 74.
        - if it is, return the following message:
        - "Hello, student, your average is <show average>. The letter equivalent is F"
        */
if(rounded_average <= 74){
    letter = "F";
}
/*
    4. Add an else if statement to check if the value of avg is greater than or equal to 75 and if average is less than or equal to 79.
        - if it is, return the following message:
        - "Hello, student, your average is <show average>. The letter equivalent is D"
        */
else if(rounded_average >= 75 || rounded_average <= 79){
    letter = "D";
}
/*
    5. Add an else if statement to check if the value of avg is greater than or equal to 80 and if average is less than or equal to 84.
        - if it is, return the following message:
        - "Hello, student, your average is <show average>. The letter equivalent is C"
        */
else if(rounded_average >= 80 || rounded_average <= 84){
    letter = "C";
}

/*    6. Continue to add an else if statement in the checkAverage function to check if the value of avg is greater than or equal to 85 and if average is less than or equal to 89.
        - if it is, return the following message:
        - "Hello, student, your average is <show average>. The letter equivalent is B"
        */
else if(rounded_average >= 85 || rounded_average <= 89){
    letter = "B";
}
/*
    7. Add an else if statement to check if the value of avg is greater than or equal to 90 and if average is less than or equal to 95.
        - if it is, return the following message:
        - "Hello, student, your average is <show average>. The letter equivalent is A"
        */
else if(rounded_average >= 90 || rounded_average <= 95){
    letter = "A";
}
/*
    8. Add an else if statement to check if the value of average is greater than 96.
        - if it is, return the following message:
        - "Hello, student, your average is <show average>. The letter equivalent is A+"

        Invoke and add a number as argument using the browser console.
*/
else if(rounded_average >= 96){
    letter = "A+";
}

    console.log(`Hello, student, your average is: ${rounded_average}. The letter equivalent is ${letter}`);
}

checkAverage(71, 70, 73, 71);
checkAverage(80, 82, 83, 81);
checkAverage(85, 86, 85, 86);
checkAverage(91, 90, 92, 90);
checkAverage(95, 96, 97, 96);

