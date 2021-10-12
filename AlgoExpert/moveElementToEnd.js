function moveElementToEnd(array, toMove) {
    let temp="",endInd = array.length-1
    array.sort((a,b)=>a-b)
    for(let i=0;i<endInd-1;i++){
        if(array[i]===toMove && (endInd)!==toMove){
            temp=array[i]
            array[i]=array[endInd]
            array[endInd]=temp
            endInd-=1
        }
    }
    return array
}
console.log(moveElementToEnd( [3, 1, 2, 4, 5],3))
console.log(moveElementToEnd( [6, 4, 5, 2, 2, 2, 2],2))
