const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
        this._head = null;
        this._tail = null;
    }

    append(data) {
        var node = new Node(data);

        if (this.length) {
            this._tail.next = node;
            Node.previous = this._tail;
            this._tail = node;          
            this._tail.data = data; 
        }
        else {
            this._head = node;
            this._tail = node;        
        }
        this.length++;
        return node; 
    }

    head() {
        return this._head.data;
    }

    tail() {
        return this._tail.data;
    }

    at(index) {
        var currentNode = this._head,
            count = 0;

        if (index == 0) {
            return currentNode.data;
        }

        if (index === (this.length-1)) {
            return this._tail.data;
        }

        while (count++ < index){
            currentNode = currentNode.next;
        }
        return currentNode.data;
    }

    insertAt(index, data) {
        var currentNode = this._head;
        for (var i = 0; i < this.length; i++) {
            if (i==index) {
              currentNode.data = data;  
            }
            currentNode = currentNode.next;
        }
        return this;
    }

    isEmpty() {
        if (this.length===0) {
            return true;
        }
         else return false;
    }

    clear() {
        if(this.length){
            
            this._head.data = null;
            this._tail.data = null;            
            this.length = 0;
        }
        return this;
    }

    
    deleteAt(index) {
       
       var currentNode = this._head;
        for (var i = 0; i < this.length; i++) {
            if (i == index) {
                if (currentNode.previous != null)
                    currentNode.previous.next = currentNode.next;
                if (currentNode.next != null)
                    currentNode.next.previous = currentNode.previous;
                this.length--;                
            }
            currentNode = currentNode.next;
        }
        return this;

    }

    reverse() {
       var currentNode = this._head;
        var previous, next;
        while (currentNode != null) {
            prev = currentNode.previous;
            next = currentNode.next;
            currentNode.prev = next;
            currentNode.next = previous;
            currentNode = next;
        }
        prev = this._head;
        this._head = this._tail;
        this._tail = previous; 

        return this;


    }

    indexOf(data) {
        var currentNode = this._head;       
        for (var i = 0; i < this.length; i++) {
            if (currentNode.data == data) {
                return i;
            }
            else currentNode = currentNode.next;
        }
        return -1;
       }

}

module.exports = LinkedList;
