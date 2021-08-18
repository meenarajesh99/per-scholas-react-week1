/** 
    Objective

    In this challenge, we practice creating objects. Check out the attached tutorial for more details.

    Task

    Complete the function in the editor. It has two parameters:  and . It must return an object modeling a rectangle that has the following properties:

    length: This value is equal to a.
    width: This value is equal to b.
    perimeter: This value is equal to 2 *(a+b)
    area: This value is equal to a * b
    
*/



function rectangle(length: number, width: number){
    const area = length * width;
    const perimeter = 2 * (length + width);
    let rectangleInfo: string;

 //   const info = {length:1, width:1, perimeter:1, area}
    rectangleInfo = `Area of rectangle is ${area} , Perimeter of rectangle is ${perimeter}`;
    return  rectangleInfo;
}
console.log(rectangle(5,7));
