var transpose = function(matrix) {
    let i=0;
    let endResult =[]
    while(i<matrix[0].length){
        let arr =[]
        for(let j=0;j<matrix.length;j++){
            arr.push(matrix[j][i])
        }
        endResult.push(arr)
        i++
    }
    return endResult

};
console.log(transpose([[1,2],[4,5],[7,8],[10,11]]))
console.log(transpose([[1,2,3],[4,5,6]]))

