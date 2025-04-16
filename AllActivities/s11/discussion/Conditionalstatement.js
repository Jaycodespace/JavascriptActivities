function determineTyphoonIntensity(windSpeed) {
    if (windSpeed < 30) {
        return "Not a typhoon yet.";
    } else if (windSpeed <= 61) {
        return "Tropical depression detected.";
    } else if (windSpeed <= 88) {
        return "Tropical storm detected.";
    } else if (windSpeed <= 117) {
        return "Severe tropical storm detected.";
    } else {
        return "Typhoon detected.";
    }
}

RESULT = determineTyphoonIntensity(224);
console.log(RESULT);

let message = determineTyphoonIntensity(90);

if(message == "Severe tropical storm detected."){
    console.warn(message);
} 


if("false"){
    console.log(true);
}else{
    console.log(false);
}