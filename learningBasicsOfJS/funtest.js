function a(){

    b(3)
   /* if(5<6){
        console.log(4)
    }*/

    function b(num1){

        if(num1>4){
            return true
        }
        else {return false
        }

        //console.log(2*num1)
    }
}



console.log(a())
console.log(  parseInt("."))

let h =98;
function changeA(){
    h=777
    console.log("inside", h)
}

console.log(`outside ${h}`)
changeA()
console.log(`outside ${h}`)
changeA()

class car{
    constructor() {

        this.sum =0
        this.str = ["s","d",1]
    }

    eat(){
        this.sum++
        for(let st of this.str){
            st.eat()
        }
        console.log(this.sum)

    }
}
let carobj = new car()
carobj.eat()
