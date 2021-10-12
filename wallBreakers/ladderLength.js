var ladderLength = function(beginWord, endWord, wordList) {
    if(wordList.indexOf(endWord)==-1){
        return 0
    }else {
        //wordList.sort((a,b)=> a-b) already sorted
        let result =[]
        for(let i=0;i<wordList.length;i++){
            let counter =0
            for(let j=0;j<beginWord.length;j++){
                if(wordList[i].indexOf(beginWord[j])==-1){
                    counter+=1
                }
            }
            if(counter<=1){
                result.push(beginWord)
                beginWord=wordList[i]
            }
        }
        return result.length
    }
};
//console.log(ladderLength("hit","cog",["hot","dot","dog","lot","log","cog"]))

console.log(ladderLength("hot","dog",    ["hot","dog","dot"]))