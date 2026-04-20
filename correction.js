//Create a JavaScript program that determines whether a student qualifies for admission based on certain conditions.

//Requirements

//1. Create an anonymous function stored in a variable
//2. The function should accept:
//* student name
//* exam score
//* age
//* has required documents

                                                        
// let minimumAge = 18;

// let aggregate = 200;
// let requiredDocument = true;



let checkAdmissionStatus = function(name, examScore, studentAge, hasDocument){
    if(studentAge <= 16){
        console.log(`${name}: not eligible- Age requirement not met`);
        
    }
    else if(hasDocument == false){
        console.log(`${name}: Document required`);
        
    }
    else if(examScore >= 85 && studentAge >= 18){
        console.log(`${name}: Admission granted`);   
    }
    else if(examScore >= 70){
        console.log(`${name}: Pending`);
        
    }
    else{
        console.log(`No admission!`);
        
    }
}

checkAdmissionStatus("Tobi", 90, 16, true);
checkAdmissionStatus("Felix", 50, 19, true);
checkAdmissionStatus("Alex", 85, 18, false);