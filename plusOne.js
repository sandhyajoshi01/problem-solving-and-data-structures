var plusOne = function(digits) {
    const result = []
    let str =""
    digits.map(digit=>str+=digit)
    const addedOne = BigInt(str)+BigInt(1)
    const addString= addedOne.toString()
    for(let i =0;i<addString.length;i++){
        result.push(parseInt(addString[i]))
    }
    return result
};
console.log(plusOne([1,2,3]))
console.log(plusOne([9,9]))
console.log(plusOne([4,3,2,1]))
console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3])) //[6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,4]