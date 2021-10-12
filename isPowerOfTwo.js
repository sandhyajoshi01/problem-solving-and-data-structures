var isPowerOfTwo = function(n) {
    /*for(let i=0;i<=n;i++){
        if(Math.pow(2,i)==n){
            return true
        }
        else {
            if(i!=n){
                continue
            }
            else {
                return false
            }
        }
    }
*/
    const power = Math.log(n)/Math.log(2)
    console.log(power)
    if(Number.isInteger(power)){
        return true
    }
    else{
        let poww = power.toString().split('.')
        const powLen = poww[1]

        for(let j=0;j<powLen.length-1;j++){
            if(powLen[j]==0){
                if(j==powLen.length-2){
                    return true
                }
                else {continue}
            }
            else{
                return false
            }
        }
    }

};

console.log(isPowerOfTwo(17))
//console.log(isPowerOfTwo(536870912))
/*
console.log(isPowerOfTwo(1))
console.log(isPowerOfTwo(16))
console.log(isPowerOfTwo(17))
console.log(isPowerOfTwo(536870912))

*/
