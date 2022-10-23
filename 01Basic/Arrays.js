const Fruits = ['apple', 'orange', 'strawberry']
const Arr = ['cat', 123, 45]

console.log(Arr)
console.log("Acess: ", Arr[0])

// Append
Arr[3]='DogS'
console.log("Append: ", Arr)
Arr[5]='Insect'
console.log("Append: ", Arr)

//push_back
Arr.push(12)
//push_front
Arr.unshift('Start')
console.log("Append: ", Arr)

// pop
console.log("pop array: ", Arr.pop())
console.log("Append: ", Arr)

//search
console.log("Index of an element : ", Arr.indexOf('cat'))