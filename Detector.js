//here we ask for speed of the car
//then convert the input to an integer using the parseInt() function and store it in the variable carspeed
const carSpeed = parseInt(prompt("Enter the speed of the car: "));
//the car speed is checked is it is more than 70 is false the output is==ok
if (carSpeed  < 70) {
    console.log("Ok")
    
}
    // Math.floor() function to round down to the nearest integer. 
    //This formula subtracts 70 from the speed to get the number of 
    //km/s above the speed limit, then divides that number by 5 to get the number of demerit points.
    const demeritPoints = Math.floor((carSpeed - 70) / 5);
    console.log(`You have ${demeritPoints} demerit points.`);
 if (demeritPoints>=12 ){
   console.log ("license suspende")
}
