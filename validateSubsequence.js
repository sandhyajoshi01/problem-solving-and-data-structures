function isValidSubsequence(array, sequence) {
    let result = false
    //ensuring non empty arrays
    if(array.length==0||sequence.length==0){
        return result
    }
    //length of sequnce cannot be greater than length of array

    if(array.length>=sequence.length){
        //all the elements of seq must be in array so we compare using seq to array
        for(let i=0; i<sequence.length; i++){
            innerloop:
                for(let j=0; j<array.length;j++){
                    //elements in seq can be in lesser index val than array with the same element but not greater
                    if(array[j]===sequence[i] && i<=j){
                        result= true
                        //replace the element in array with that index with '' so that the element will not
                        //be compared with another same element in the sequence
                        array[j]=""
                        //then break the loop so that if there are multiple same elements in array, they don't get removed
                        break innerloop
                    }
                    //if there is an extra element in seq that doesn't exist in array
                    if(j==array.length-1){
                        //reached to the end of array comparing
                        return false
                    }

                }
        }
    }
    return result

}

console.log(isValidSubsequence([5,1,22,25,6,-1,8,10],[1,6,-1,10]))