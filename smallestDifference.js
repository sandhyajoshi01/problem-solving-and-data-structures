function smallestDifference(arrayOne, arrayTwo) {
    let result =[]
    //input arrays must be non empty
    if(arrayOne.length==0 || arrayTwo.length==0){
        return result
    }
    //assume the least difference is between first elements of both arrays
    let difference = Math.abs(arrayOne[0]-arrayTwo[0])
    for(let i =0;i<arrayOne.length;i++){
        for(let j=0;j<arrayTwo.length;j++){
            //if any difference between any elements is less than the stored diff,
            // replace the difference and push the items in result array
            //if there's already items in result, pop until its empty and then push
            if(Math.abs(arrayOne[i]-arrayTwo[j])<difference){
                difference = Math.abs(arrayOne[i]-arrayTwo[j])
                if(result.length!=0){
                    while(result.length!=0){
                        result.pop()
                    }
                }
                result.push(arrayOne[i])
                result.push(arrayTwo[j])
            }
        }
    }
    return result
}
console.log(smallestDifference([-1,5,10,20,28,3],[26,134,135,15,17]))
//time complexity: O(nlog(n)+mlog(m)) n 1st array ip and m 2nd array ip
//space complexity: O(1)