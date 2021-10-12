/*  Number Of Ways To Make Change
Given an array of distinct positive integers representing coin denominations and a
single non-negative integer n representing a target amount of
money, write a function that returns the number of ways to make change for
that target amount using the given coin denominations.
Note that an unlimited amount of coins is at your disposal.
Sample Input n=6  denoms= [1, 5]
Sample Output 2 // 1x1 + 1x5 and 6x1*/

function numberOfWaysToMakeChange(n, denoms) {
   /* let waysToChange =new Map()
    waysToChange.set(0,1)
    for(let i=1;i<=n;i++){
        waysToChange.set(i,0)
    }
    for(let j=0;j<denoms.length;j++){
        for(let key of waysToChange.keys()){
            if(denoms[j]<=key){
                waysToChange.set(key,waysToChange.get(key)+waysToChange.get(key-denoms[j]))
            }
            else{
                continue
            }
        }
    }
    return waysToChange.get(waysToChange.size-1)*/

    //inputs sum = 6  denominations:[1,5]
    //create a new array that states the number of ways in which the sum from 0 to n ie 6 can be made with no coins
    let numWays=new Array(n)
    numWays[0]=1
    numWays.fill(0,1) //[ 1, 0, 0, 0, 0, 0 ]
    //this is the base case numways, from index 0 to last it shows the number of ways
    //index amount can be created with no coins
    // only 0 amount can be created with 1 way ie using no coins at all
    //index represents the sum amount of the above array

    //loop through input array [1,5
    for(let i=0;i<denoms.length;i++){
        //loop through the numways array
        for(let j=0;j<numWays.length;j++){
            //compare input coins deno with the sum
            //only if coin has less deno than the sum number, there are ways. like 1 can make sum 2 if 1<2
            if(denoms[i]<=j){
                //if less, update the array in the position of sum index with adding the value already in
                //sum index with the value of this index [sum-coin deno] 2-1
                numWays[j]+=numWays[j-denoms[i]]  //numways[2]=numways[2]+numways[2-1]
            }
            //else continue
        }
    }
    //once all gets done, take the last updated index value
    return numWays[numWays.length-1]
}
console.log(numberOfWaysToMakeChange(6,[1,5]))

//BOTH WAYS ARE ACCEPTABLE