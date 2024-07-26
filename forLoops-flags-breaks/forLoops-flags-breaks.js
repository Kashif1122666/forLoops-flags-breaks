// CHAPTER-19: for loops: Flags, Boolean, array length, and loopus interruptus

// Flags
// flag variable is used as signal in programming to let the program know that a 
// ceratain condtion has met . it usually act as a boolean variable indicating a condtion
// to be either true or false

// Booleans
// data type 0s and 1s

// array length
// number of elemnets in an array

// loopus interruptus
// to break a loop before it's completion,meeting a condiond

// implementation
const cleanestCity = ["peshawar","islamabad","lahore","karachi","multan"];
const cityToCheck = prompt("please enter your city name");

// Flag
// let gotcity = false;

// for (var cityindex = 0; cityindex < cleanestCity.length; cityindex++){
//     if (cityToCheck === cleanestCity[cityindex]){
//         gotcity = true;
//         // loopus interruptus
//         break;
//     }
// }

// if(gotcity) {
//    alert("It's one of the clean cities");
// }
// else{
//   alert("It's not on the list");
// }

// using the flag
