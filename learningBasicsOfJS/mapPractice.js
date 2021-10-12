let john = { name: "John" };

// for every user, let's store their visits count
let visitsCountMap = new Map();

// john is the key for the map
visitsCountMap.set(john, 123);

console.log( visitsCountMap.get(john) ); // 123


const setEg = new Set([1,2,4]);
console.log(setEg)
const setEgg = new Set()
setEgg.add(0)
console.log(setEgg)
const sett = new Set()
sett.add(555)
console.log(`${sett}`)
console.log(" sett",sett)