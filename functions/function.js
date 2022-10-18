// console.log("functions");

// 2 ways of creating a function
// console.log( one())
// function declaration
// function one{} => {

// return "one"
// }
// one(); 
//calling a function

//funtion expression
// const two = () => {
//     return 2;
// } const shortendTwo = () => 2;
// console.log(two())

//objects
// const ajNelson = {
//    name: "Aj",
//    occupation: "Security Guard",
//    overTwentyOne: true,
//    Age: 25
// }
//const increaseAge = (person) => {
    //dot notation
//    person.Age += 1;
//    console.log(`Horray it's your ${person.Age} birthday`);
// }

// call the function
// increaseAge(ajNelson);


// function areBothEven(n1, n2) {
//    console.log(n1 % 2)
//    console.log(0)
//    return !(n1 % 2) && !(n2 % 2);
//}
// console.log(areBothEven(2, 6));

/*let maria = getDevObject("Maria", "HTML", "CSS", "JavaScript", "jQuery");
function

// function getDevObject(name) {
//    let skills = [];
//    for (let i = 1; i < arguments.length; i++) {
//        skills.push(arguments[i]);
//    }
//    return { 
//        devName: name, 
//        jobSkills: skills 
//    }
// }
// console.log(getDevObject (maria))
*/

/* const sayName = (name) => {
    //console.log('Hello my name is ' + name)
    console.log(`Hello my name is ${name}`);
}

sayName('Aang')
sayName('Sokka')
sayName('Katara')
sayName('Toph')

const calculateAreaOfSquare = (num1, num2) => {
    let sqft = (length * height);
    console.log(`My square or rectangle is ${sqft} square`)
}

calculateAreaOfSquare(38, 18)
*/

/* const calculateArea = (num1, num2) => {
    console.log('The area of a triangle with a width of '+ num1 +'_ and a height of '+ num2 + '_ is '+  (num1 * num2)/2 +' square units.');
}

calculateArea(38, 18);

const caclulateAreaOfCircle = (radius) => {
    let sqft = radius * radius * 3.14;
    console.log(`The area of a circle with a radius of ${radius} is ${sqft} square units.`)
}
caclulateAreaOfCircle(12);

const calculateArea = (num1,num2) => {
    console.log(num1*num2);
}
console.log(calculateArea(23,66));
const calculateCircle = radis => 3.14*radis*radis;
console.log(calculateCircle(3));
const planetHasWater = planet => 'Earth' || 'Mars' ? true : false;
console.log(planetHasWater('Earth'));
const planetHasWater1 = function (planet){
    if (planet==='Earth' || planet === 'Mars'){
        return true;
    }else{
        return false;
    }
}
console.log(planetHasWater1('Earth'));
console.log(planetHasWater1("Moon"));

const planetHasWater = (planet) => {
    return (planet.toLowerCase() === 'earth' || planet.toLowerCase() === 'mars')
}
*/

