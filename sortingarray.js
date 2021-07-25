var sortArrayByParity = function(nums) {
    let even =[], odd= [], result =[];
    if(nums.length<=5000){
        for(let i=0; i<nums.length; i++) {
            if (nums[i] >= 0){
                nums[i] % 2 == 0 ? even.push(nums[i]) : odd.push(nums[i])
            }
            else{
                result.push(0)
                return result
            }
        }
        return even.concat(odd)

    }
    else{
        result.push(0)
        return result
    }

};
console.log(sortArrayByParity([0,-1,3,4]))