class Person {
    constructor(first_name, last_name, job)
    {
    this.first_name = first_name
    this.last_name = last_name
    this.job = job
    }

    full_Name_as(){
        return this.first_name + ' ' + this.last_name
    }
}



const person_1 = new Person('Amr', 'Alkhashab', 'Student')
console.log(person_1.full_Name_as())