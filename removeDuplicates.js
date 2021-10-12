var removeDuplicates = function(nums) {
    if(nums.length==0){
        return nums
    }
    const addCh = "_"
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            if(nums[i]==nums[j]){
                //splice removes the number of item (2nd arg) from the index(1st arg) and insert
                nums.splice(nums[j],1,5)
                //nums.push(addCh)
            }
        }
    }
    nums.sort((a,b)=>a-b)
    return nums

}
console.log(removeDuplicates( [1,1,2]))