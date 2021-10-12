function tournamentWinner(competitions, results) {
    // Write your code here.
    //results=[0,0,1]
    let windetail={},twinner=""
    if(competitions.length==0||results.length==0){
        return winners
    }
    for(let i=0; i<results.length;i++){
        if(results[i]==0){
            if(Object.keys(windetail).includes(competitions[i][1])){
            //to check if the object has the key as its prop
            //if(windetail.hasOwnProperty(competitions[i][1])){
           // if(competitions[i][1] in windetail){
                windetail.competitions[i][1]+=1
            }
            else{
                windetail[competitions[i][1]]=1
                //console.log("competitions["+i+"][1]",competitions[i][1])
            }
        }
        //result[i]==1
        else{
            //this returns an array of only keys Object.keys(windetail)
            if(Object.keys(windetail).includes(competitions[i][0])){
            //if(competitions[i][0] in windetail){
                windetail[competitions[i][0]]+=1
                //console.log("[competitions["+i+"][0]]",[competitions[i][0]])
            }
            else{
                windetail[competitions[i][0]]=1
            }
        }
    }
    let allVal = Object.values(windetail)
    let tempwinner = allVal[0]

    for(let value of allVal){
        if(value>tempwinner){
            tempwinner=value
            twinner=Object.keys(windetail)[Object.values(windetail).indexOf(tempwinner)]
            //Object.keys(windetail) gives array of keys {arrayofkeys[indexOfWinner]==> key of winner i.e Python in this case}
            //[Object.values(windetail).indexOf(tempwinner)] this part gives only the index and not the value from key/value
           // console.log(twinner)
        }
    }
    return twinner
}
/*console.log(tournamentWinner([["HTML","C#"],["C#","Python"],["Python","HTML"],["Python","Javascript"]],
    [0,0,1,1]))*/
console.log(tournamentWinner([["HTML", "Java"],["Java", "Python"],["Python", "HTML"]],[0, 1, 1]))