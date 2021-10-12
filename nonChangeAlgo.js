function nonConstructibleChange(coins) {
    //logic: if the first coin of any denomination is bigger than 1, the least sum it cannot calculate is 1
    /*if any deno is lesser than the 'sum of all the deno +1' before it, every sum is doable until that coin deno
    * if that deno is larger than the 'prev sum +1' then the 'sum+1' is the sum that is the least undoable
    * [1,1,2,3,5,7,22]
    * sum =1 'sum initially is zero' sum=sum+first deno
    * second deno : 1<=sum+1 :1<=1+1
    * third deno: 2<=2+1
    * 3<=4+1
    * 5<=7+1
    * 7<=12+1
    * 22>12+7+1 (22>20)
    * return sum+1 (20)
    * [7] the least sum is 1
    * [4,5,11] the least sum that cannot be done is 1 along with 6,7 and so on*/

    if(coins.length==0){
        return 1
    }
    else{
        //let sum = coins.reduce((accu, currentval)=> {return accu + currentval}) //sum=41
        coins.sort((a,b)=>{return a-b}) //[1,1,2,3,5,7,22]
        let change=0
        for(let coin of coins){
            if(coin<=change+1){
                change+=coin
            }
        }
        return change+1
    }

}
//console.log(nonConstructibleChange([5,7,1,1,2,3,22]))
//console.log(nonConstructibleChange([1,2,5]))
//console.log(nonConstructibleChange([4,5,11]))
console.log(nonConstructibleChange([1,1,1,1,1,2,15]))
console.log(nonConstructibleChange([1]))
console.log(nonConstructibleChange([5]))