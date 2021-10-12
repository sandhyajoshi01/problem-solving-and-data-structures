var isValid = function(s) {
    //if the string is empty
    if(s.length==0){
        return false
    }
    //create a map with key, value {an object can be used as well since we don't iterate}
    let tempMap = new Map([["{","}"],["(",")"],["[","]"]])
    //create temporary stack
    let tempArray = []
    for(let ch of s){
        //if character is any of the ones in map keys, then push to a new array
        if(tempMap.has(ch)){
            tempArray.push(ch)
        }
        //if the character is a closing bracket of the character on the top of stack, then pop the stack
        else if(ch==tempMap.get(tempArray[tempArray.length-1])){
                tempArray.pop()
        }
        //if the starting character is a closing bracket
        else{
            return false
        }
    }
    //if everything is popped out of the stack
    if(tempArray.length==0){
        return true
    }
    //if only inserted and not popped (in case the string has only opening brackets)
    else {
        return false
    }
}
console.log(isValid("{[]}"))  //true
console.log(isValid("([)]")) //false
console.log(isValid("(]")) //false
console.log(isValid("[[")) //false
console.log(isValid("(){}}{"))//false
console.log(isValid('(')) //false