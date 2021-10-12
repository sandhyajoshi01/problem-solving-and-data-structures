function minimumWaitingTime(queries) {
    /*queries.sort((a,b)=>a-b)
    //let waitTime = queries.reduce(((acc,val)=>acc+val),queries[0])-queries[queries.length-1]

    let waitTime =queries[0]
    //start from the third element i.e index 2 till including last index ie queries.length-1
    for(let i=2;i<queries.length;i++){
        //create waitime for each element
        let waitTimeEach =0
        for(let j=0;j<i;j++){
            waitTimeEach+=queries[j]
        }
        //add each waittime to total waitTime
        waitTime+=waitTimeEach
    }
    return waitTime;*/
    if(queries.length>=2){
        //if there are two or more elements
        queries.sort((a,b)=>a-b)
        let totalWaitTime = queries[0]
        //if there are 3 or more elements
        if(queries.length>=3){
            //from the third element to the last element, loop through
            for(let i=2;i<queries.length;i++){
                //calculate waittime for each element
                let eachWaitTime =0
                //loop from the first to the element that wait time is calculated for
                for(let j=0;j<i;j++){
                    eachWaitTime+=queries[j]
                }
                //add the individual waittime with total waittime
                totalWaitTime+=eachWaitTime

            }
        }
        return totalWaitTime
    }
    //if there is only one element in the array
    else{
        return 0
    }
}
console.log(minimumWaitingTime([3,2,1,2,6]))
console.log(minimumWaitingTime([4, 3, 1, 1, 3, 2, 1, 8]))
console.log(minimumWaitingTime([9, 8]))
console.log(minimumWaitingTime([8])) //returns 0 as there is no wait time for the element
