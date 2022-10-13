//create an array with your favShows

const favShows = ["FG", "ATLA", "Naruto", "DBZ"]

let firstShow = favShows [0];

console.log(firstShow);

//push

favShows.push("FG")

console.log(favShows)

//pop

favShows.pop()
console.log(favShows)

const array = [];
for ( let i = 1; i < 10; i += 2) {
    array.push(i);
}
console.log(array);
const newArray = [];
for (let i = 2; i <= 20; i++){
    newArray.push(i*3);
}
console.log(newArray);
const pondArray =["#", "##", "###", "####", "#####", "######", "#######"];
let sign = "";
for (let i = 0; i < pondArray.length; i++) {
    sign += pondArray[i] + "\n";
}
console.log(sign);

let output = []
for  (let i = 1; i<=7; i++){
      output.push("#");
      console.log(output.join());
}

//movies

const movies = ["Bros", "Smile", "Nope"];

movies.forEach( movies => console.log(movies + " is going to be a good movie"));

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numbers.forEach( number => console.log(number))

//while loop
const myArray = [5, 4, 3, 2, 1, 0];
while (i < 5){
  myArray.push(i);
  i--;
}

var i = 0;
while(i > 5) {
  myArray.push(i);
  i++;
}