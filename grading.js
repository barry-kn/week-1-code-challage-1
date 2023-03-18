// accept input from the user---->starting
//the subject (5) must be fill to give the out put 


let english = eval(prompt("Enter your makrs in English"))
let cre = eval(prompt("Enter your makrs in cre"))
let social_studies = eval(prompt("Enter your makrs in Social studies"))
let math = eval(prompt("Enter your makrs in Math"))
let science = eval(prompt("Enter your makrs in Science"))
// accept input from the user---->end

//This part add the input and to find the  average of the 5 subject
let average = ((cre + social_studies + math +  science +  english   ) / 5)

//the average should be more then 0 and less than 100 or equal to 100
switch (average>0 && average<=100) {
    //the average which is from 79--->100 is A
case average<=100 && average>=79:
console.log(`your gare is : A`);

break;
//the average which is from 60--->78 is B
case average<=78 && average>=60:
    console.log(`your gare is : B`);

break;
//the average which is from 49--->59 is c
case average<=59 && average>=49:
console.log(`your gare is : C`);

break;
//the average which is from 40--->49 is D
case average<49 && average>=40:
    console.log(`your gare is : D`);

break;
 //the average which is from 0--->40 is E
case average<=39 && average>=0:
    console.log(`your gare is : E`);

break;
}