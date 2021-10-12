/*
function getNthFib(n) {
    if(n==1){
        return 0
    }
    else if(n==2){return 1}
    else {
        return getNthFib(n-1)+getNthFib(n-2)
    }
}
console.log(getNthFib(7))
*/

//alternate solution
function getNthFib(n) {
    if(n==1){return 0}
    else if(n==2){return 1}
    else if(n<1){return null}
    else{
        let arr=[0,1]
        //[0,1,1,2,3,5,8,13]
        //[0,1,2,3,4,5,6,7]

        for(let i=2;i<n;i++){
            let fn = 0
            fn += arr[i-1]+arr[i-2]
            arr.push(fn)
        }
        return arr[arr.length-1]

    }
}
console.log(getNthFib(6))
