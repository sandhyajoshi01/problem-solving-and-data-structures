/* Uncommon Words from Two Sentences
A sentence is a string of single-space separated words where each word consists only of lowercase letters.
A word is uncommon if it appears exactly once in one of the sentences, and does not appear in the other sentence.
Given two sentences s1 and s2, return a list of all the uncommon words. You may return the answer in any order.
Example 1:
Input: s1 = "this apple is sweet", s2 = "this apple is sour"
Output: ["sweet","sour"]
Example 2:
Input: s1 = "apple apple", s2 = "banana"
Output: ["banana"]*/

var uncommonFromSentences = function(s1, s2) {
    let s3 = s1.concat(" "+s2).split(" ")
    let sentenceMap = new Map()
    for(let i=0;i<s3.length;i++){
        if(!sentenceMap.has(s3[i])){
            sentenceMap.set(s3[i],1)
        }
        else {
            sentenceMap.set(s3[i],sentenceMap.get(s3[i])+1)
        }
    }
    const result =[]
    for(let [key,value] of sentenceMap){
        if(value>1){
            sentenceMap.delete(key)
        }
        else {
            result.push(key)
        }
    }
    return result
};
console.log(uncommonFromSentences("this apple is sweet","this apple is sour"))
console.log(uncommonFromSentences("s z z z s","s z ejt"))
console.log(uncommonFromSentences("apple apple","banana"))

//ACCEPTED ON LEETCODE