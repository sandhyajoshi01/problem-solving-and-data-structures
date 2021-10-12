/*
You're given a Node class that has a name and an
array of optional children nodes. When put together, nodes form
an acyclic tree-like structure.

Implement the depthFirstSearch method on the
Node class, which takes in an empty array, traverses the tree
using the Depth-first Search approach (specifically navigating the tree from
left to right), stores all of the nodes' names in the input array, and returns
it.     A
     /  |  \
    B   C   D
   / \     / \
  E   F   G   H
     / \   \
    I   J   K

output:["A", "B", "E", "F", "I", "J", "C", "D", "G", "K", "H"]*/
class Node {
    constructor(name) {
        this.name = name;
        this.children = [];
    }

    addChild(name) {
        this.children.push(new Node(name));
        return this;
    }

    depthFirstSearch(array) {
        //for every node, add the node's name into the array
        //for every child call the depthFirstSearch() ==>> add the name and further call the function again
        array.push(this.name)   //name of the parent
        /*for every node class, it has a name and children, the whole node is sent as an argument*/
        for(let child of this.children){
            child.depthFirstSearch()
        }
        return array
    }
}
let nodeobj = new Node("A",["B","C","D"])

console.log(nodeobj.depthFirstSearch([]))
//nodeobj.addChild("B")



