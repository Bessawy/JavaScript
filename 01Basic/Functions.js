function addNums(num = 1, num2 = 2)
{
    return num + num2
}


console.log(addNums(2,3))

// Constructor function // no need classes are better

function Person(first_name, last_name, job)
{
    this.first_name = first_name
    this.last_name = last_name
    this.job = job

    this.full_name = function()
    {
        return this.first_name + ' ' + this.last_name
    }
}

Person.prototype.get_name = function()
{
    return this.first_name
}
const P1 = new Person('Amr', 'Alkhashasb', 'Student')
console.log(P1.full_name())
console.log(P1.get_name())