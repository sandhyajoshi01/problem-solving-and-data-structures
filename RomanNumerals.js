var romanToInt = function(s) {
    const map1 = new Map();
    map1.set('I',1)
    map1.set('V',5)
    map1.set('X',10)
    map1.set('L',50)
    map1.set('C',100)
    map1.set('D',500)
    map1.set('M',1000)
    //console.log(map1)

    let result=0
    for(let ind=0,num = Infinity;ind<=s.length-1;ind++){
        val = map1.get(s[ind])
        result+= val<=num? val : val-2*num
        num= val
    }
    return result
};
console.log(romanToInt('VI'))