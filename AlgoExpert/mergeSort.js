function mergeSort(array){
    //return the array as is if the length is 1
    if(array.length===1){
        return array
    }
    //while taking middle value, its length is taken and not index
    let mid=Math.floor((array.length)/2)
    //divide the array into left and right part
    //don't include mid in left but include in right
    let leftArr = array.slice(0,mid), rightArr = array.slice(mid)
    //repeat the process of dividing until the last element and then sortAndMerge every left and right
    return sortAndMerge(mergeSort(leftArr),mergeSort(rightArr))
}
function sortAndMerge(leftArr, rightArr){
    let leftInd=0, rightInd=0, result =[]
    //compare the values on left and right and push the smaller one into the result array
    while(leftInd<leftArr.length && rightInd<rightArr.length){
        if(leftArr[leftInd]<rightArr[rightInd]){
            result.push(leftArr[leftInd])
            leftInd+=1
        }else{
            result.push(rightArr[rightInd])
            rightInd+=1
        }
    }
    //at last with the sorted and merged value in result, concat the value
    return result.concat(leftArr.slice(leftInd)).concat(rightArr.slice(rightInd))
}
/*console.log(mergeSort([34,87,67,2,99,76,48,12,6]))
console.log(mergeSort([75,88,34,56,45,77,1,4,2,6,11,20]))*/
console.log(mergeSort([35,45,4,2,55,67,9,7,1,6,3,105,22]))
