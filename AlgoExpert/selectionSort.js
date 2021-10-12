function selectionSort(array){
    //[-2,8,78,2,90,56,33]
    let temp=""
    for(let i=0;i<array.length;i++){
        let minindex=i
        //this whole loop just to find out the index of smaller number than on index i
        for(let j=i+1;j<array.length;j++){
            if(array[minindex]>array[j]){
                minindex=j
            }
        }
        //if index i already has smaller number, don't swap//cause we assume that i has smaller number
        if(minindex!==i){
            temp=array[minindex]
            array[minindex]=array[i]
            array[i]=temp
        }
    }
    return array
}
console.log(selectionSort([45,76,21,44,90,76,9,1,56,40]))