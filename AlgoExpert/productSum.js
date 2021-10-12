function productSum(array,multiplier=1) {
    //[5, 2, [7, -1], 3, [6, [-13, 8], 4]]
    let sum =0
    for(let i=0;i<array.length;i++){
        if(typeof array[i]=="number"){
            sum+=array[i]
        } else if(typeof array[i]=="object"){
            sum+=productSum(array[i],multiplier+1)
        }
    }
    return sum*multiplier
}
console.log(productSum([5, 2, [7, -1], 3, [6, [-13, 8], 4]]))

//time complexity O(n) and space O(depth of array)