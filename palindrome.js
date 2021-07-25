var isPalindrome = function(x) {
    //first convert the int data type to str so that you can run a loop through it
    let revstr = '';
    let j = x.toString()
    for (let i =j.length-1; i>=0; i--){
        revstr+=j[i];
    }
    if (revstr===j){
        return true
    }
    else{
        return false
    }

};
console.log(isPalindrome(12321))

/*
Runtime: 212 ms, faster than 49.76% of JavaScript online submissions for Palindrome Number.
    Memory Usage: 47.6 MB, less than 96.23% of JavaScript online submissions for Palindrome Number.*/
