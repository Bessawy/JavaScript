
// Same as C++

for(let i = 0; i<2; i++)
{
    console.log(i)
}

console.log("-------------------")
let j = 0
while(j < 2)
{
    console.log(j)
    j++
}
console.log("-------------------")
const Arr = [1, 2, 3, 4]

for(let i = 0; i< Arr.length; i++)
{
    console.log(Arr[i])
}
console.log('______________')
for(let e of Arr) // auto a : Arr c++
{
    console.log(e)
}
console.log('______________')
// Doesnot return anything (just loop)
Arr.forEach(function(num)
{
        console.log(num)
})
console.log('______________')
// return array of values
const Arr_ = Arr.map(function(num){
    return num + 1
})
console.log(Arr_)
console.log('______________')
// create array based on condition
const Arr_2 = [
    {Name: "Amr",
    Athletic: true},
    {Name: "Emad",
    Athletic: false}
]
const Istrue = Arr_2.filter(function(per)
{
    return per.Athletic == false
})
console.log(Istrue)

// === match datatype and value
// == match values only 10 == '10'
// if condition
let x = 10
if(x === 10)
{
    x = 20
}
else if(x < 10)
{
    x = 10
}
else{
    x = 2
}

// or ||, and && same as C++ 
const color = x > 10 ? 'red' : 'Green'
// same as C++
switch(color)
{
    case 'red':
        break
    case 'blue':
        break
    default:
        break

}