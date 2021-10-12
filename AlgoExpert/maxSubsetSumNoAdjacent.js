function maxSubsetSumNoAdjacent(array) {
    //find the set of numbers which are not positioned next to each other
    //and they produce the maximum sum
    //can be done by dynamic programming
    //let maxsum
    if(array.length==0){
        return 0
    }
    else if(array.length==1){
        let maxsum
        return maxsum=array[0]
    }
    else if(array.length==2){
        return Math.max(array[0],array[1])
    }
    else {
        let tempsum=array.slice(0)
        for(let i =2;i<array.length;i++){
            tempsum[i]= Math.max(tempsum[i-2]+tempsum[i],tempsum[i-1])
        }
    return tempsum[tempsum.length-1]
    }
}
console.log(maxSubsetSumNoAdjacent([75, 105, 120, 75, 90, 135]))
console.log(maxSubsetSumNoAdjacent([75]))
console.log(maxSubsetSumNoAdjacent([75, 105]))
console.log(maxSubsetSumNoAdjacent([]))




