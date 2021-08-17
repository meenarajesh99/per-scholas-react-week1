/*
Use the strings in the arrays to form a sentence like: "Hi, my name is <Name>
Be sure to have beginning words of sentences with the proper case.

Console log the result

Use a different greeting word for each gender
Use "his" for men, "her" for women, "their" for nonbinary.

Use "my" if the isSelf argument is true
*/
/*
const greetingWords = ["hello","hi","hey"];
const prefixes = ["my", "his", "her", "their"];
*/

/**
 @param {string} name
        name of person
 @parm  {string} gender
        Possible values of "gender" argument are "male", "female", "nonbinary"
 @param {boolean} isSelf
 @returns {string}
          greeting sentence
*/
/*
function greeting(name, gender, isSelf) {
  // do stuff here ...
  return  ``; // use template literal for string to return
}
*/


const greetingWords = ["hello","hi","hey"];
const prefixes = ["my", "his", "her", "their"];
var name;
const gender = ["male","female", "nonbinary"];
var isSelf = new Boolean(true);

function greeting(name, gender, isSelf){
    var pronoun ;
    var greet;

    
//conditional statements to change the greeting based on different parameters
    if(gender == "male"){
        pronoun = prefixes[1];
        greet = greetingWords[0];
        greet = greet.charAt(0).toUpperCase() + greet.slice(1);   //convert first letter of greet to uppercase
    }
    else if(gender == "female"){
        pronoun = prefixes[2];
        greet = greetingWords[1];
        greet = greet.charAt(0).toUpperCase() + greet.slice(1);
    }
    else {
        pronoun = prefixes[3];
        greet = greetingWords[2];
        greet = greet.charAt(0).toUpperCase() + greet.slice(1);
    }
    if (isSelf == true){
        pronoun = prefixes[0];
        greet = greet.charAt(0).toUpperCase() + greet.slice(1);
    }   

    
    return `${greet}, ${pronoun} name is ${name}`;  //use template literal for string to return

} 

console.log(greeting("Meena", "female", true));
console.log(greeting("Jim", "male", false));
console.log(greeting("Dave", "nonbinary", false));

