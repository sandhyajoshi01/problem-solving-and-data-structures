var numJewelsInStones = function(jewels, stones) {
    let stoneMap = new Map()
    for(let i =0;i<stones.length;i++){
        if(stoneMap.has(stones[i])){
            stoneMap.set(stones[i],stoneMap.get(stones[i])+1)
        }
        else {
            stoneMap.set(stones[i],1)
        }
    }
    let totalJewels =0
    for(let j=0;j<jewels.length;j++){
        if(stoneMap.has(jewels[j])){
            totalJewels+=stoneMap.get(jewels[j])
        }
    }
    return totalJewels
};
console.log(numJewelsInStones("z", "ZZ"))