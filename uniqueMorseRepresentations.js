var uniqueMorseRepresentations = function(words) {
    //morse codes from a -z respectively
    const table = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
    //corresponding letters
    const alphabet =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    //creating a map with alphabets and their corresponding morse codes
    let morseMap = new Map()
    for(let i =0;i<alphabet.length;i++){
        //set morse codes for each alphabet
        morseMap.set(alphabet[i],table[i])
    }
    //final morse codes in a new map and their repetitions
    let allMorseCodes = new Map()
    //loop through the given array
    for(let i =0;i<words.length;i++){
        //morsecodes for each item in the parameter array
        let morsecode =''
        //extract morse codes from the map and join them all together looping through each alphabet of each item
        for(let j=0;j<words[i].length;j++){
            morsecode+=morseMap.get(words[i][j])
        }
        //now we have morse codes for each word in the array
        //if there's the same morse code as key in the map, increase the value by one else set the value to 1
       if(allMorseCodes.has(morsecode)){
           allMorseCodes.set(morsecode,allMorseCodes.get(morsecode)+1)
       }
       else {
           allMorseCodes.set(morsecode,1)
       }
    }
    //return the size
    return allMorseCodes.size
};
console.log(uniqueMorseRepresentations(["gin","zen","gig","msg"]))

//ACCEPTED BY LEETCODE