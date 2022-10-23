const name = "Amr";
const age = 24;

let str_1 = 'The age of ' + name + ' is ' + age
let str_2 = ['The age of', name, 'is', age].join(' ')
let str_3 = 'The age of'.concat(' ', name, ' is ', age)

console.log(str_1)
console.log(str_2)
console.log(str_3)

// Find length
console.log("length of the string: ", str_1.length)
// other methods
console.log("Upper_case: ", str_1.toUpperCase())
console.log("Lower_case: ", str_1.toLowerCase())
console.log("Slice_string", str_1.substring(0, 5))
console.log("Split_to_array", str_1.split(' '))