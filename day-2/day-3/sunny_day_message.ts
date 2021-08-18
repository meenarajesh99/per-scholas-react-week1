const SUNNY_DAY_MESSAGE: string ="It is sunny out today.";
let isSunny: boolean= true;
let numberOfSunnyDays: number =4;


/**
 * 
 * @param isSunny 
 *     If *today* it is sunny or not
 * @param numberOfSunnyDays 
 *      How many days in a row it has been sunny 
 * @returns
 *      Returns a string saying hi, if it's sunny, and how many days in a row it has been sunny for.
 *      Example: "Hi! It is sunny today, It has been sunny for 4 days in a row" 
 */

function sunnymessage(isSunny: boolean, numberOfSunnyDays: number): string{
    
    if(isSunny == true && numberOfSunnyDays > 1){
        return `Hi,${SUNNY_DAY_MESSAGE} It has been sunny for ${numberOfSunnyDays} days in a row.`;
    }else {
        return `Hope it will be sunny soon. `;
    }

 
}

console.log(sunnymessage(true,4));

