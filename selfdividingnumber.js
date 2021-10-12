var selfDividingNumbers = function(left, right) {
    setOfDivisible=[]
    for(let i =left; i<=right;i++){
        let j = i.toString()

        if(j.length>1){
            innerloop:
                for(let k=0;k<j.length;k++){
                   
                    if(j %j[k]==0){

                        if(k==j.length-1){
                            setOfDivisible.push(i)
                        }
                        continue
                    }
                    else {
                        break innerloop
                    }
                }

        }
        else {
            setOfDivisible.push(i)

        }

    }
    return setOfDivisible

};
console.log(selfDividingNumbers(1,22))
console.log(selfDividingNumbers(47,85))