class LinkedList{
    //constructor made the whole list with head and tail
    constructor(value) {
        this.head ={
            value:value,
            next:null
        }
        this.tail = this.head
        this.length=1
    }
    append(value){
        const newNode ={
            value:value,
            next:null
        }
        //if tail pointer points to a location already,
        //change the next of the current tail to newNode
        if(this.tail){
            this.tail.next=newNode
        }
        //now change the current tail to newNode
        this.tail=newNode
        this.length++
        //in this case we are assuming that there is already a head
        //in case the list is empty, this.head also points to the new node
       /* if(!this.head){
            this.head=newNode
        }*/
    }
}
const linkedL = new LinkedList(45)
linkedL.append(65)
linkedL.append(123)
linkedL.append("sandhya")
console.log(linkedL)