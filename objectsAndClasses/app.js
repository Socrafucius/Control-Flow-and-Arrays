/* const car = {
make: 'Honda',
model: 'Accord',
year: '1990',
nickName: 'kiki',
isLoud: true,
isRunning: false
}
console.log(myCar.nickName)
console.log(myCar.model);

const groceryList = ['chicken', 'broccoli', 'rice'];

groceryList[0] //first
groceryList[1] //second

const chicken = {
    wing: 2,
    flavor: 'mojo',
    eat: () => {
        console.log('nom, nom, nom')
    }
}

chicken.eat
*/

/* const house = {
    door: 9
}

house.window = 30; //add a property

console.log(house);

house.bathrooms = 7;
console.log(house);

house.hasGarden = true;

console.log(house);

house.bathrooms = 6;
console.log(house)
*/

/* const myPet = {
    name: 'midnight',
    name: 'shadow',
    age: 7,
    favoriteThings: ['mouse toy', 'wet food'];
    language: false,
    canSolveRubikCube: true,
}

console.log(myPet.name);
*/

const obj = {
    salutation: 'hi',
    count: 4
}
//does a value exists inside of obj
if (obj.salutation === 'hi') {
    console.log('ok');
}

for (let i =0; i < obj.count; i++) {
    console.log(i);
}

let result = obj.hasOwnProperty('salutation');
console.log(result)