var transpose = function(matrix) {
    for(let i=0; i<matrix.length; i++){
        if(i==1) {
            let j=2
        }
        else if(i==0) {
            let j =i+1
        }
        else{
            break
        }
        for(let j; j<matrix.length; j++){
            if(i!==j){
                let temp='';
                temp = matrix[i][j]
                matrix[i][j]= matrix[j][i]
                matrix[j][i]= temp
            }
            else{
                continue;
            }

        }
    }

};