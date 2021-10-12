console.log("string line1 " +
    "\nstring line2 " +
    "\nstring line3 ")
/*string line1
string line2
string line3*/

console.log(`strr1
strrr3`) //this is called template literal
// strr1
// strrr3



//all produce the same result
console.log("string line1 " +
    "string line2 "+
    "string line3 ")
console.log("string line1 \
string line2 \
string line3 ")
const stringEg = "str1 \ str2 \ str3"
console.log(stringEg)
console.log("str1 str2 str3")
console.log(`str1 str2`)


//methods used to manipulate string, and other properties
stringEg.length

const stringexample = "Hello, I am a superhuman"
//starts taking with 0 and not 1
const charat = stringexample.charAt(5)
console.log(charat) // returns ,
console.log(stringexample[5]) //returns ,

const charcodeat = stringexample.charCodeAt(5)
console.log(charcodeat)  //comma at index 5 , has unicode 44
// "Hello, I am a superhuman"

const indexof = stringexample.indexOf("u")
console.log(indexof)  //gives the index of the character  from the string, but only the
//first character that it finds if there are multiple characters
//index of first occurence of u 5

const lastindexof = stringexample.lastIndexOf("u")
console.log(lastindexof)
//index of last occurence of u 20

console.log(stringexample.indexOf("o")) //4
console.log(stringexample.lastIndexOf("o"))//4

/*with localecompare, upper > lower returns 1 & lower >upper returns -1*/
const localecompare = "hello Monkey".localeCompare("You ink")
//st1.localecompare(str2) means str1>str2  ==>> lower>upper
console.log(localecompare) // hence this returns -1

console.log("YY".localeCompare("Z"))  // Y!>Z so returns -1
console.log("YY".localeCompare("zz"))
console.log("y".localeCompare("a"))
console.log("y">"a")

const strl = "Hey! I ame happy and its good  "
console.log(strl.trim())
const str ="kdhfeiunchiereyjlsjk"
console.log(str.split("h")) // results [ 'kd', 'feiunc', 'iereyjlsjk' ]

console.log(str.substring(5,9),"substring") //from start index 5, take till index 8 and not include 9
console.log(str.slice(5,9),"slice")// same as substring
console.log(str.slice(5),"slice")// returns the whole string starting from index 5
console.log(str.substr(5,9),"substr") // from the starting index, take the number of characters as
// specified in the second argument
/*
iunc substring
iunc slice
iunchiere substr
*/
//kdhfeiunchiereyjlsjk
//negative indexing in string
console.log(str.slice(-1),"-ve indexing slice") // returns only the last character
//the very last character has index -1
console.log(str.slice(-5,-3)) //returns jl , doesn't include -3 index'
console.log(str.slice(-5,18))// returns jls and doesn;t include 18 index
console.log(str.slice(-5,-1))


//kdhfeiunchiereyjlsjk
//negative indexing in string
console.log(str.substring(-1),"-ve indexing substring") // returns only the last character
//the very last character has index -1
console.log(str.substring(-5,-3) ,"-5,-3") //returns jl , doesn't include -3 index'
console.log(str.substring(-5,18))// returns jls and doesn;t include 18 index
console.log(str.substring(-5,-8),"-5,-8")
console.log(str.substring(5)) //returns iunchiereyjlsjk
 //if the end index is way greater than the length of string, it returns the remaining string from the start index
//if the start index is greater than the end index, they get swapped
//substring takes all the -ve indices as 0. so -5,-3 becomes 0,0 so returns nothing