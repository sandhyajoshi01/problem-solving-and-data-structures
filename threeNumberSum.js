function threeNumberSum(array, targetSum) {
    // Write your code here.
    let finalResult=[]
    if(array.length==0){
        return finalResult
    }
    array.sort((a,b)=> a-b)
    for(let i=0;i<array.length;i++){
        let tempTarSum = targetSum-array[i]
        //secondLoop:
        for(let j =i+1;j<array.length;j++){
            for(let k= j+1; k<array.length;k++){
                let result=[]
                if(array[j]+array[k]==tempTarSum){
                    result.push(array[j],array[k],array[i])
                    result.sort((a,b)=>a-b)
                    finalResult.push(result)
                    //break secondLoop
                }
            }

        }

    }
    return finalResult
}
console.log(threeNumberSum([12,3,1,2,-6,5,-8,6],0))

//optimal time  O(n^2)
//optimal space O(n) n is the input in array
