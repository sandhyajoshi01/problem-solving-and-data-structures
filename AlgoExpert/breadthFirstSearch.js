// Do not edit the class below except
// for the breadthFirstSearch method.
// Feel free to add new properties
// and methods to the class.
class Node {
    constructor(name) {
        this.name = name;
        this.children = [];
    }

    addChild(name) {
        this.children.push(new Node(name));
        return this;
    }

    breadthFirstSearch(array) {

        //'this' refers to the whole node
        let Queuetemp = [this]
        while(Queuetemp.length>0){
            //the element popped from the beginning is stored in current
            let currentNode = Queuetemp.shift()
            //at this moment queuetemp is empty
            //push the root node in to the final array
            array.push(currentNode.name)
            for(const child of currentNode.children){
                Queuetemp.push(child)
            }
        }
        return array
    }
}

// Do not edit the line below.
exports.Node = Node;

/*{
  "graph": {
    "nodes": [
      {"children": ["B", "C", "D"], "id": "A", "value": "A"},
      {"children": ["E", "F"], "id": "B", "value": "B"},
      {"children": [], "id": "C", "value": "C"},
      {"children": ["G", "H"], "id": "D", "value": "D"},
      {"children": [], "id": "E", "value": "E"},
      {"children": ["I", "J"], "id": "F", "value": "F"},
      {"children": ["K"], "id": "G", "value": "G"},
      {"children": [], "id": "H", "value": "H"},
      {"children": [], "id": "I", "value": "I"},
      {"children": [], "id": "J", "value": "J"},
      {"children": [], "id": "K", "value": "K"}
    ],
    "startNode": "A"
  }
}*/
