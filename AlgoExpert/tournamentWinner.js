function tournamentWinner(competitions, results) {
    let winner =""
    let winnerMap = new Map()
    winnerMap.set(winner,0)
    for(let i=0;i<results.length;i++){
        if(results[i]==1){
            if(winnerMap.has(competitions[i][0])){
                winnerMap.set(competitions[i][0],winnerMap.get(competitions[i][0])+3)
            }
            else{
                winnerMap.set(competitions[i][0],3)
            }
            if(winnerMap.get(competitions[i][0])>winnerMap.get(winner)){
                winner=competitions[i][0]
            }
        }
        else{
            if(winnerMap.has(competitions[i][1])){
                winnerMap.set(competitions[i][1],winnerMap.get(competitions[i][1])+3)
            }
            else{
                winnerMap.set(competitions[i][1],3)
            }
            if(winnerMap.get(competitions[i][1])>winnerMap.get(winner)){
                winner=competitions[i][1]
            }
        }
    }
    return winner
}
console.log(tournamentWinner([
    ["HTML", "C#"],
    ["C#", "Python"],
    ["Python", "HTML"]
],[0, 0, 1]))