//SOLUTION 1

function test(num) {
    if (num > 0) {
        console.log("Positive!");
    } else if (num < 0) {
        console.log("Negative!");
    } else if (num === 0) {
        console.log("You answer is zero")
    } else {
        console.log("That is not a number")
    }
}

//calling a function
test(-5); //negative
test(10) //calling functions again
test(0)
test("Dulce");

//SOLUTION 2

let num = -0;

if (num > 0) {
    console.log("positive")
} else if (num < 0) {
    console.log("negative")
} else {
    console.log("not negative or positive");
}

//ACCESS GRANTED

const allowedAge = 7;

if (allowedAge >= 18) {
    console.log("access granted. welcome aboard!")
} else {
    console.log("You are too young to access this content")
}

let number;
if (number === 0) {
    console.log(“zero”)
} else if (number > 0) {
    if (number > 100) {
        console.log(“possitive and greater than 100 “)
    } else if (number < 100) {
        console.log(“possiive and smaller than 100”)
    } else {
        console.log(“possitive number”)
    }
} else if (number < 0) {
    console.log(“nagative number”);
} else {
    console.log(“please put in a number”)
}

var marks = 7;
if (marks >= 90)
    console.log("Grade A");
if (marks >= 80 && marks < 90)
    console.log("Grade B");
if (marks >= 70 && marks < 80)
    console.log("Grade C");
if (marks >= 55 && marks < 70)
    console.log("Grade D");
if (marks < 55)
    console.log("Grade F");