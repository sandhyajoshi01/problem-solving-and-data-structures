var GetImportance = function(employees, id) {
    let importance =0, subId=""
    for(let i=0;i<employees.length;i++){
        for(let j=0;j<employees[i].length;j++){
            if((employees[i][j]===id || subId.indexOf(employees[i][j])>-1)&& j!==1){
                importance+=employees[i][j+1]
            }else if(typeof employees[i][j]=="object" && employees[i][j].length!==0){
                subId=employees[i][j]
            }
        }
    }
    return importance
};
console.log(GetImportance([[1,5,[2,3]],[2,3,[]],[3,3,[]]], 1))
console.log(GetImportance([[1,2,[5]],[5,-3,[]]],5))
console.log(GetImportance([[1,5,[2,3]],[2,3,[]],[3,3,[]]],1))
