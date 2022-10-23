const Game = {
    name: 'Doom',
    release: 1994,
    price: 69.9,
    packages: {
        P1: 'normal',
        p2: 'premium'
    }
}

console.log(Game)
console.log(Game.name)

const {name, price, packages: {P1}} = Game;
console.log(P1)

// Add
Game.playercount = 1000
console.log(Game)

// Array of objects
const todos = [{
id: 1,
text: 'cook dinner',
Iscomplete: false
},
{
    id: 2,
    text: 'Go to gym',
    Iscomplete: true
}
]

console.log(todos[1].text)

// change to JSON
const JSON_data = JSON.stringify(todos)
console.log(JSON_data)


