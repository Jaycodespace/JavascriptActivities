/*
    2. Create a function called login which is able to receive 3 parameters called username,password and role.
        - add an if statement to check if the username is an empty string or undefined or if the password is an empty string or undefined or if the role is an empty string or undefined.
        - if it is, return the following to inform the user that their input should not be empty:
        - "Inputs must not be empty"

    3. Add an else statement to the if statement in the login function. Inside the else statement add a switch to check the user's role add 3 cases and a default:
        - Look up JS Switch Statements to be able to accomplish the output for this activity.
        - if the user's role is admin, return the following message:
        - "Welcome back to the class portal, admin!"
        - if the user's role is teacher, return the following message:
        - "Thank you for logging in, teacher!"
        - if the user's role is a student, return the following message:
        - "Welcome to the class portal, student!"
        - if the user's role does not fall under any of the cases, as a default, return a message:
        -  "Role out of range."
        - Look up Switch Statements to be able to complete the output for this activity.
*/
function login(username, password, role){
    if(!username || !password || !role){
        return "Inputs must not be empty"
    }else{
        switch(role){
            case "admin":
                console.log("Welcome back to the class portal, admin");
                break;
            case "teacher":
                console.log("Thank you for logging in, teacher!");
                break;

            case "student":
                console.log("Welcome to the class portal, student!");
                break
            default:
                console.log("Role out of range.");
        }
    }
}

login();
login("","password","admin");
login("adminUser","","admin");
login("adminUser","password","");

login("adminUser","password","admin");
login("teacherUser","passowrd","teacher");
login("studentUser","password","student");
login("studentUser","password","carpenter");







/*
    4.  Create a function `getSeason()` that returns the season based on the month.
        - Use a switch case statement.
        - Dec - Feb = Winter
        - Mar - May = Spring
        - Jun - Aug = Summer
        - Sep - Nov = Fall
*/ 

function getSeason(month) {
    switch (month) {
        case "december":
        case "january":
        case "february":
            return "Winter";
        case "march":
        case "april":
        case "may":
            return "Spring";
        case "june":
        case "july":
        case "august":
            return "Summer";
        case "september":
        case "october":
        case "november":
            return "Fall";
        default:
            return "Invalid month";
    }
}

console.log(getSeason("january"));  
console.log(getSeason("march"));      
console.log(getSeason("july"));     
console.log(getSeason("Unknown"));       