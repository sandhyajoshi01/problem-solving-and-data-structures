let twoSum = function(nums, target) {
    //let i=0, j=i+1;
    let arr1=[], arr2=[];
    //length is the total number of elements in an array and not index
    for (let i=0;i<=nums.length-1;i++){
        for(let j=i+1;j<=nums.length-1;j++){
            if (nums[i]+nums[j]===target){
                arr1.push(i)
                arr1.push(j)
                //arr2.push(arr1)
            }
        }
    }
    if (arr1.length>=1){
        return arr1;
            //console.log(arr1[i])  ==> this gives output as undefined as well
    }
};
//console.log(twoSum([2,7,11,15],9))
console.log(twoSum([2,7,11,15],9))
//console.log(twoSum([3,3],6))

/*
Runtime: 128 ms, faster than 32.60% of JavaScript online submissions for Two Sum.
    Memory Usage: 39.5 MB, less than 63.66% of JavaScript online submissions for Two Sum.*/
