function nonConstructibleChange(coins) {
    // Write your code here.
    if(coins.length==0){
        return 1
    }
    else{
        changes = []
        for(let i=0;i<coins.length;i++){
            for(let j=i+1;j<coins.length;j++){
                if(coins[i]>0 && coins[j]>0){
                    changes.push(coins[i]+coins[j])
                }
                else{
                    return 0
                }

            }
        }

        let alldeno = coins.concat(changes)
        maxChange = Math.max(...alldeno)
        alldeno.sort(function (a,b){return a-b})
        outerloop:
        for(let i=0;i<alldeno.length;i++){
            let j= i+1
            if(alldeno[j]-alldeno[i]>1){
                return alldeno[i]+1
                break outerloop
            }
        }
    }
}
console.log(nonConstructibleChange([5,7,1,1,2,3,22]))