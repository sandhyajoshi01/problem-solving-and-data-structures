const companies = [
    {name: "Company One", category: "Finance", start: 1981, end: 2003},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
];

const mapTest = companies.map(company=>company.name=="Company One")
console.log(mapTest)  // this returns whether each object ie company has its name "Company One" in true or false
// it doesn't filter the ones with their names "Company One"

const mapTest1 = companies.map(company=> [company.category, company.name])
console.log(mapTest1)
//if display more than one prop, put it in an array
//each item will be put in an array and then into a final array
/*  [  [ 'Retail', 'Company Four' ],
    [ 'Technology', 'Company Five' ]]*/

const maptest2 = companies.map(company=>`${company.name} ${company.end}`)
//tilde can be used to display multiple prop as one single string like this 'Company One 2003'
console.log(maptest2)
/*    [
    'Company One2003',
        'Company Two2008']*/

/*every element will be displayed based on the condition but some items showing and others filtered out- this is not
possible with map*/


//ANOTHER EXAMPLE
const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
const sqages = ages.map(age=>Math.pow(age,2))
console.log(sqages)

//use map when you want to do certain things with every single element of an array
const subAge = ages.map(age=> age-5)
console.log("subAge",subAge)
/*
    [
    28,  7, 15, 11,  0, 49,
        16, 39, 56,  8, 10, 40,
        20, 59, 27
    ]
*/
//since the result is still in an array, further map can be used on the result

const divAge = ages.map(age=>age/2).map(age=>age+12)
console.log("divAge", divAge)

