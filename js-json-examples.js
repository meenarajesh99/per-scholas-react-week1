const myInfo = {
    "name": "Meena",
    "birthday": 05301975,
    "citiesLivedIn": ["Chicago", "Los Angeles"],
    "isHuman": true,
    "planetsVisited": null,
    "personalInfo": {
        "favoriteFood": "chocolate"
    }
};

console.log('my info printed as object');
console.log(myInfo);

console.log('my info printed as a string in the JSON format');
const myInfoAsJSON = JSON.stringify(myInfo);
console.log(myInfoAsJSON);

function sayHi(name){
    return `my name is ${name}`;
}
console.log(sayHi("Meena"));