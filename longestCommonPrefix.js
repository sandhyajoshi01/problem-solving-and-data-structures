var longestCommonPrefix = function(strs) {
    //setting prefix as empty
    let prefix = ""
    let counter = 0
    if(strs.length==1){
        return strs[0]
    }
    /*take a letter from the first string and compare with other letter on the same index of other strings
    first letter of index 0 === first letter of index 1, then
    first letter of index 0 === first letter of index 2
    then second letter of index 0 with second letter of rest of the strings*/

    outerloop:
        //looping through every letter in the first word
    for(let i=0;i<strs[0].length;i++){
        //looping through rest of the words leaving the very first string
        for(let j=1;j<strs.length;j++){
            //compare the letters on the same index between the first string and then the rest
            if (strs[0][i]===strs[j][i]){
                counter++
                if(counter==strs.length-1){
                    //add the letter as a prefix only if all of the strings have the same letter as common
                    prefix+=strs[0][i]
                }

            }
            else{
                //if the strings do not match, break the whole nested loop and end the algorithm
                break outerloop
            }
        }
        counter=0
    }
    return prefix

};
//console.log(longestCommonPrefix(["flower","flow","flight"])) // this returns fl
//console.log(longestCommonPrefix(["cir","car"])) // this returns only c and not cr
console.log(longestCommonPrefix(["fl","fl","fl","hgl"]))  //this returns nothing