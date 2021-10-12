function recur(arr){
    //using maps to store the numbers and their repetitions
    let numRep = new Map()
    for(let i =0; i<arr.length;i++){
        if(numRep.has(arr[i])){
            numRep.set(arr[i],numRep.get(arr[i])+1)  //mapname.get(keys) ==> gives values
            return arr[i]
        }
        else {
            numRep.set(arr[i],1)
        }
    }
    return undefined
}
console.log(recur([1,2,3,4,5]))