let detectCapitalUse = function (word) {
    const z = 90;
    let count = 0;
    const len = word.length

    for (const el of word) {
        let elVal = el.charCodeAt(0)
        if (z - elVal >= 0) {
            count++;
        }
    }
    if (count == len || (count == 1 && (word.charAt(0).charCodeAt(0) >= 65 && word.charAt(0).charCodeAt(0) <= 90))||
    count==0)
    {
        return true
    } else {
        return false
    }
};
console.log(detectCapitalUse('h'))
/*
Runtime: 80 ms, faster than 85.08% of JavaScript online submissions for Detect Capital.
    Memory Usage: 40.2 MB, less than 47.64% of JavaScript online submissions for Detect Capital.*/
