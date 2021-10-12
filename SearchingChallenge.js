function SearchingChallenge(strArr) {
    let result =[],subresult=[]
    for(let i=0;i<strArr.length;i++){
        for(let j=0;j<strArr.length;j++){
            if(strArr[i][j]==="0"){
                subresult.push(i)
                subresult.push(j)
                result.push(subresult)
            }
            subresult=[]
        }
    }
    //[ [ 0, 0 ], [ 1, 0 ], [ 1, 3 ], [ 2, 0 ], [ 2, 1 ], [ 2, 2 ] ]
    

    return result;

}
console.log(SearchingChallenge(["01111", "01101", "00011", "11110"]))