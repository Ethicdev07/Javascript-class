//Create a JavaScript program that calculates the cost of a ride based on different conditions.

//Write a program using an anonymous function that calculates how much a user should pay for a ride. The user should enjoy 10% discount if they go on a trip above 20km distance. Also, enjoy 20% discount if they go 20km during peak hours

//Your function should accept:

//* passenger name
//* distance (in km) 
//* ride type ("bike", "car", "bus")
//* is peak time (true or false)

let calculateFare = function(passengerName, distance, rideType, isPeak){
    let ratePerKm;

    if(rideType == 'car'){
        ratePerKm = 200
    }else if(rideType == 'bus'){
        ratePerKm = 100
    }else if(rideType == 'bike'){
        ratePerKm = 80
    }else{
        console.log(`Invalid ride type`);
        return;
    }

    let totalFare = ratePerKm * distance;

    if(distance > 20){
        totalFare = totalFare - (0.1  * totalFare)
    }

    if(distance > 20){
        totalFare = totalFare - (0.1  * totalFare)
    }

    if(isPeak == true){
        totalFare = totalFare + (0.2 * totalFare)
    }

    if(totalFare < 1000){
        totalFare = 1000;
    }

    console.log(`${passengerName} will pay N${totalFare} for a ${rideType} ride`);
    

};

calculateFare('Tobi', 5, 'bus', true);

calculateFare('John', 21, 'car', true);
calculateFare('amusan', 10, 'bike', true)
calculateFare('thomas', 10, 'train', true)



//Class exercise

//write a javascript program that calculate a user's eletricity bill based on units consumed

//requirement
//1. create an anonymous function stored in a variable
//2. the function should  accept
//i. customer name
//ii. number of units consumed

//Billing rules
//1. first 50units -- N100 per unit
//2. next unit(51-100)--- N150 per unit
//3. Above 100units --- N200 per unit

//additional condition

//if total bill is more than N20000, apply 5% discount