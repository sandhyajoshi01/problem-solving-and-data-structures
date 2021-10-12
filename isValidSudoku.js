/* VALID SUDOKU
Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:
Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
Note:
A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules.*/

var isValidSudoku = function(board) {
    //general map for checking rowwise, columnwise and 3*3 matrix
    let rowMap = new Map()

    for(let i=0;i<board.length;i++){
        //checking row wise
        for(let j=0;j<board[i].length;j++){
            if(checkingMap(i,j,9)==false){
                return false
            }else {continue}

        }
        //checking column wise that all numbers are unique
        for(let k=0;k<board[i].length;k++){
            if(checkingMap(k,i,9)==false){
                return false
            }else {continue}
        }
    }
    let k=0
    //taking only 3 columns and matrices at a time
    while(k<3){
        //for general 3*3 matrix
        for(let i=0;i<3;i++){
            for(let j=0;j<3;j++){
                //the same as row and column wise
                if(checkingMap(i,j,3)==false){
                    return false
                }else {continue}
            }
        }
        //after the 3*3 is done, add k by 1
        k++
    }

    if(rowMap.size==0){
        return true
    }
    function checkingMap(value1, value2,length){
        //console.log(rowMap)
        if(rowMap.has(board[value1][value2])){
            return false
        }
        else {
            //if the map doesn't have any values, enter the value in map using set function
            //entering all unique value and reaches to the length of the matrix ie 9
            //clear the matrix
            if(value2==length-1){
                rowMap.clear()
            }
            else {
                if(parseInt(board[value1][value2])!="NaN"){
                    rowMap.set(board[value1][value2],1)
                }

            }
        }

    }
};

console.log(isValidSudoku([["5","3",".",".","7",".",".",".","."]
    ,["6",".",".","1","9","5",".",".","."]
    ,[".","9","8",".",".",".",".","6","."]
    ,["8",".",".",".","6",".",".",".","3"]
    ,["4",".",".","8",".","3",".",".","1"]
    ,["7",".",".",".","2",".",".",".","6"]
    ,[".","6",".",".",".",".","2","8","."]
    ,[".",".",".","4","1","9",".",".","5"]
    ,[".",".",".",".","8",".",".","7","9"]]))
console.log(isValidSudoku([["8","3",".",".","7",".",".",".","."]
    ,["6",".",".","1","9","5",".",".","."]
    ,[".","9","8",".",".",".",".","6","."]
    ,["8",".",".",".","6",".",".",".","3"]
    ,["4",".",".","8",".","3",".",".","1"]
    ,["7",".",".",".","2",".",".",".","6"]
    ,[".","6",".",".",".",".","2","8","."]
    ,[".",".",".","4","1","9",".",".","5"]
    ,[".",".",".",".","8",".",".","7","9"]]))