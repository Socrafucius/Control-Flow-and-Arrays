console.log("functions");

//2 ways of creating a function
console.log( one())
//function declaration
function one{} => {

return "one"
}
one(); 
//calling a function

//funtion expression
const two = () => {
    return 2;
} const shortendTwo = () => 2;
console.log(two())

//objects
const ajNelson = {
    name: "Aj",
    occupation: "Security Guard",
    overTwentyOne: true,
    Age: 25
}
const increaseAge = (person) => {
    //dot notation
    person.Age += 1;
    console.log(`Horray it's your ${person.Age} birthday`);
}

// call the function
increaseAge(ajNelson);