// const adventurer = {
//     name: 'Aj',
//     hitpoints: 10,
//     belongings: ["sword", 'potion', 'food'],
//     companion: {
//         name: 'terra'
//         type: 'mage'
//         companion: {
//             name: 'klaus'
//             type:'wolf'
//         }
//     }
// }

//console.log(adventurer.belongings[0])

/* for(let i = 0; i < adventurer.belongings.length; i++); {
    console.log(adventurer.belongings[i])
}
*/
/*acess the companion object
console.log(adventurer.companion) // { }
console.log(adventurer.companion.name) // values inside { }
console.log(adventurer.companion.type)


console.log(adventurer.companion.companion.type);

//get health insurance
console.log(adventurer.companion.companion.belongings[2])
*/
// 
/* const movies = [
    { title: 'toy story' },
    { title: 'wild wild west' },
    { title: 'the purge' },
]

console.log(movies) //array of objects
console.log(movies[0]) //first object in the array
console.log(movies[0.title]) 


for(let i = 0; i < movies.length i++);{
    console.log(movies[i])
    console.log(movies[i].title);
}
*/

// const foo = {
//     someArray: [1, 2, 3,]
//     someObject: {
//         someProp: 'heres johnny'
//     }
//     someMethod: function () => {
//         console.log('inside of method')
//     }

// }

// console.log(foo.someObject.someProp); // heres johnny
// console.log(foo.someArray{0} // 1
// console.log(foo.someMethod())

// const foo = [
//     [1, 2, 3, 4], //0
//     [5, 6, 7, 8], //1
//     [9, 10, 11, 12], //2
// ]

// cosnole.log(foo[1][2]); //7

// const foo = [
//     1,
//     'hi',
//     ()=>{
//         console.log('fun')
//     }
// ]

// console.log(foo[2]() );

// const player = {
//     name: 'king arthur',
//     health: 1000,
//     power: 9000,
//     stamina: 5000,
// }

// const createEnemy = (nameIs, healthIs, powerIs, staminaIs) => {
//     const newEnemy = {
//         name: nameIs
//         health: healthIs
//         power: powerIs
//         stamina: staminaIs
//     }
//     return newEnemy
// };

// const createPlayer = (nameIs, healthIs, powerIs, staminaIs) => {
//     const newPlayer = {
//         name: nameIs
//         health: healthIs
//         power: powerIs
//         stamina; staminaIs
//     }
//     return newPlayer;
// }

// class Character {
    //constructor
    // constructer(name, age, eyes, hair, lovesCats = false, lovesDogs = true) {
    //     this.legs = 2;
    //     this.arms = 2;
    //     this.eyes: eyes;
    //     this.hair: hair
//             this.lovesCats = lovesCats
//             this.lovesDogs = lovesDogs            
//  }
    // greet(otherCharacter) {
    //     console.log('hi ' + otherCharacter + '!');
    // }
        // smite() {
        //     console.log('I smite thee you vile person');
        // }
// }

// const p1 = new Character();
// const enemy = new Character();

// console.log(p1, enemy)

// console.log(p1.greet('bob'))
// console.log(p1.smite())

// console.log(enemy.greet('sauron'))

// console.log(p1);
// p1.setHair('pink');
// console.log(p1);

// console.log(classyGreeting(p1))

//parent classes

// class Character {
//     constructor (name, age, eyes, hair, lovesCats = true, lovesDogs) {
//       this.legs = 2;
//       this.arms = 2;
//       this.name = name;
//       this.age = age;
//       this.eyes = eyes;
//       this.hair = hair;
//       this.lovesCats = lovesCats;
//       this.lovesDogs = lovesDogs || true;
//     }
//     greet (otherCharacter) {
//       console.log('hi ' + otherCharacter + '!');
//     }
//     classyGreeting (otherClassyCharacter) {
//       console.log('Howdy ' + otherClassyCharacter.name + '!');
//     }
//     setHair (hairColor) {
//       this.hair = hairColor;
//     }
//     smite () {
//       console.log('i smited thee.');
//     }
  
//   }

//   class hobbit extends Character {
//     steal () {
//         console.log('lets get away')
//     }
//     greet (otherCharacter) {
//         console.log(`hobbit says hello to' ${otherCharacter}`)
//     }
//     smite() {
//         super.smite();
//         this.steal();

//     }
//   }

//   const frodo = new Hobbit('mr baggins', 33, 'blue', 'brown')  const hobbit = new Character('Mr Baggins', 33, 'brown', 'black')
//   console.log(hobbit);

class car {
    constructor(make, serialNumber) {
        this.serialNumber = serialNumber;
        this.make = maker;
    }
    drive() {
        console.log('vroom vroom')
    }
}

//factory class
class factory {
    constructor(company) {
        this.company = company;
        this.cars = []
    }
}
generate() {
    const newCar = new Car(this.company, this.cars.length);
    this.cars.push(newCar)
}
findCar (index) {
    return this.cars[index]
}
const tesla = new Factory('tesla');
tesla.generateCar();
tesla.generateCar();
tesla.generateCar();
tesla.generateCar();
tesla.generateCar();
console.log(tesla)
console.log(tesla.findCar(0));

const porche = new Factory('porche');
porche.generateCar();
porche.generateCar();
porche.generateCar();
console.log(porche);
console.log(porche.findCar(1))