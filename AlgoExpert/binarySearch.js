function binarySearch(array,target){
    let left=0, right = array.length-1
    while(left<=right){
        let mid = Math.floor((left+right)/2)
        if (target===array[mid]){
            return mid
        }
        else if(target<array[mid]){
            right=mid-1
        }else {
            left=mid+1
        }
    }
    return false
}
console.log(binarySearch([1,6,7,8,9,10],8))