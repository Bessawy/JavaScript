let p = new Promise((resolve, reject) => 
{
    let a = 3
    if(a === 2)
    {
        resolve("Success")
    }
    else
    {
        reject("Failed")
    }
})


p.then((message)=>{console.log(message)}).catch((message)=>{console.log(message)})



function test_case(x)
{
    return new Promise((resolve, reject) =>
    {
        if(x == 2)
            return resolve('Success in this')
        else
            return reject('Failed in this')
    }
    )
}

test_case(2).then((message)=> {console.log(message)}).catch((message)=> {console.log(message)})


//Promises.all () take array of promises return array of messages
//Promises.race() take array of promises return a single message of the fastest