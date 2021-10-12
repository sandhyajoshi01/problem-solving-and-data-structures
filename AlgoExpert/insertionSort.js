function insertionSort(array){
    //creating an empty string
    let tempEle=""
    //loop from the index 1 till last
    for(let i=1;i<array.length;i++){
        //store the index value in a new var
        let sortIndex = i
        //check the value at new var with the one before and swap until it satisfies the condition
        while(array[sortIndex]<array[sortIndex-1]){
            tempEle= array[sortIndex]
            array[sortIndex]=array[sortIndex-1]
            array[sortIndex-1]=tempEle
            //decrease the new var index by 1
            sortIndex-=1
        }
        //take the new element to swap with elements before it
    }
    return array
}
console.log(insertionSort([5,9,7,4,2,8,3,6,1]))