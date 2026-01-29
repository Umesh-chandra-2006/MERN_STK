// HANDS-ON 1: Smart Login Status Engine
let isLoggedIn= false;
let isProfileComplete= false;

if(!isLoggedIn){
    message="Please log in.";
}
else if(isLoggedIn && !isProfileComplete){
    message="Complete your profile."
} 
else{
    message="Welcome back!"
}

console.log(message);

//HANDS-ON 2: Course Price Tag Labeler
let price=1299;
let label="";

if(price<500)
    label="Budget Course";
else if(price>=500 && price<=1000)
    label="Standard Course";
else
    label="Premium Course";

console.log("Label: " + label);

//HANDS-ON 3: Enrollment Eligibility Checker
let hasPaid= true;
let hasCompletedBasics= false;

let enrollMessage = (hasPaid && hasCompletedBasics) ? "Enroll Now" : "Complete Requirements";

console.log(enrollMessage);