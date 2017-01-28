const Node = require('./node');

class LinkedList {

    constructor() {
        this.length = 0;
        this._head = null;
        this._tail = null;
    }


    append(data) {

        var prev = this._tail;
        var node = new Node(data, prev);

        if (!this.length) {
            this._head = node;
            this._tail = node;
        } else {
            this._tail = node;
            prev.next = this._tail;
        }

        this.length++;

        return this;
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
                if (currentNode.prev != null)
                    currentNode.prev.next = currentNode.next;
                if (currentNode.next != null)
                    currentNode.next.prev = currentNode.prev;
                this.length--;
                break;
            }
            currentNode = currentNode.next;
        }

        return this;
    }

    reverse() {
        var currentNode = this._head;
        var prev, next;
        while (currentNode != null) {
            prev = currentNode.prev;
            next = currentNode.next;
            currentNode.prev = next;
            currentNode.next = prev;
            currentNode = next;
        }
        prev = this._head;
        this._head = this._tail;
        this._tail = prev; 

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