const arrname = [
    {name:"GH",age:20},
    {name:"RR",age:27},
    {name:"TE",age:12},
    {name:"FB",age:16}
]
//not using array function
const eligible = arrname.filter(function (person){if(person.age>18){return true}})
//eligible brought the objects in an array
console.log(eligible)

//using array function
//const eli = arrname.filter(person=>person.age>18)
const eli = arrname.filter(function (person){return person.age>18})
console.log(eli)

