function bubbleSort(array){
    //[45,76,21,44,90,76,9,1,56,40]
/*
    let tempvar =""
    let counter=0
    while(counter<array.length){
        for(let i=0;i<array.length;i++){
            let j=i+1
            if(array[i]>array[j]){
                tempvar=array[i]
                array[i]=array[j]
                array[j]=tempvar
            }
        }
        counter++
    }
    return array
*/
    let tempval = 0
    for(let i=0;i<array.length;i++){
        for(let j=0;j<array.length;j++){
            let k =j+1
            if(array[j]>array[k]){
                tempval = array[j]
                array[j]=array[k]
                array[k]=tempval
            }
        }
    }
    return array

}
console.log(bubbleSort([45,76,21,44,90,76,9,1,56,40]))