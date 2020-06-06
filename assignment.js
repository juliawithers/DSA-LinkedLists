class _Node {
    // the node class creates a node
    // there is a value and a next(id of next node if available, null if none)
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    // on this new list, set head to null as empty 
    constructor() {
        this.head = null;
    }

    // to insert an itemin front of list: 
    insertFirst(item) {
        // the new node item is the new head, set at the head. no need to change any next on any other node, just set the new node "next" to this head.
        this.head = new _Node(item, this.head);
    }

    // insert item at end of list
    insertLast(item) {
        // if the head is null, it means the list is empty, insert the item at the beginning of the list
        if (this.head === null) {
            this.insertFirst(item);
        }
        // if there are nodes in the list, then set tempNode to the last node(this.head). then while temNode next is null (end of list), then set tempNodeNext to the new node
        else {
            let tempNode = this.head;
            while (tempNode.next !== null) {
                tempNode = tempNode.next;
            }
            tempNode.next = new _Node(item, null);
        }
    }

    // InsertBefore()
    insertBefore(item,key) {
        // inserts a new node before a given node containing a key(name) insertBefore('something','something')
        if (!this.head){
            return null;
        }

        let curNode = this.head;
        let prevNode = this.head;

        while (curNode.value !== key){
            if (curNode.next === null) {
                return null;
            }
            else {
                prevNode = curNode;
                curNode = curNode.next;
            }
        }
        prevNode.next = new _Node(item, curNode)
        // need to set new node.next for new item and reset .next for key Node
    }

    insertAfter(item, key) {
        // inserts a new node after a node containing a key (name) insertAfter('something','something')
        if (!this.head){
            return null;
        }

        let curNode = this.head;

        while (curNode.value !== key){
            if (curNode.next === null) {
                return null;
            }
            else {
                curNode = curNode.next;
            }
        }
        curNode.next = new _Node(item, curNode.next)
        // need to set new node.next for new item and reset .next for key Node
    }

    insertAt(item,position) {
        // inserts an item at a specific position in the linked list
        if (!this.head){
            return null;
        }

        let curNode = this.head;
        let prevNode = this.head;

        let ind = 0;

        while (ind < position){
            if (curNode.next === null) {
                return null;
            }
            else {
                prevNode = curNode;
                curNode = curNode.next;
                ind++
            }
        }
        prevNode.next = new _Node(item, curNode)
        // need to set new node.next for new item and reset .next for key Node
    }
 
    find(item) { 
        // Start at the head
        let currNode = this.head;
        // If the list is empty
        if (!this.head) {
            return null;
        }
        // Check for the item 
        while (currNode.value !== item) {
            /* Return null if it's the end of the list 
               and the item is not on the list */
            if (currNode.next === null) {
                return null;
            }
            else {
                // Otherwise, keep looking 
                currNode = currNode.next;
            }
        }
        // Found it
        return currNode;
    }

    remove(item){ 
        // If the list is empty
        if (!this.head) {
            return null;
        }
        // If the node to be removed is head, make the next node head
        if (this.head.value === item) {
            this.head = this.head.next;
            return;
        }
        // Start at the head
        let currNode = this.head;
        // Keep track of previous
        let previousNode = this.head;

        while ((currNode !== null) && (currNode.value !== item)) {
            // Save the previous node 
            previousNode = currNode;
            currNode = currNode.next;
        }
        if (currNode === null) {
            console.log('Item not found');
            return;
        }
        previousNode.next = currNode.next;
    }
}

function main(){
    const SLL = new LinkedList();
    SLL.insertLast('Apollo');
    SLL.insertLast('Boomer');
    SLL.insertLast('Helo');
    SLL.insertLast('Husker');
    SLL.insertLast('Starbuck');

    // console.log(SLL)

    SLL.insertLast('Tauhida');
    SLL.remove('Husker');

    // console.log(SLL)

    SLL.insertBefore('Athena','Boomer');
    SLL.insertAfter('Hotdog','Helo');
    SLL.insertAt('Kat',3);
    
    // console.log(SLL)
    // call display to test
    let listDisplay = this.display(SLL)
    console.log(listDisplay)

    let listSize = this.size(SLL)
    console.log(listSize)

    let listEmptyCheck = this.isEmpty(SLL)
    console.log(listEmptyCheck)

    let listPrevious = this.findPrevious(SLL,'Hotdog')
    console.log('previous= '+listPrevious.value)

    let listLast = this.findLast(SLL)
    console.log(listLast)

    return SLL
    
}

console.log(main())

function display(list){
   
  // If the list is empty
  if (!list.head) {
      return null;
  }
  // Start at the head
  let curNode = list.head;
  let arr = [];
  while ((curNode !== null) && (curNode.value !== null)) {
    // Save the previous node 
    console.log(curNode.value)
    arr.push(curNode.value)
    curNode = curNode.next
  }
  return arr
}

function size(list){
  if (!list.head) {
      return null;
  }
  // Start at the head
  let curNode = list.head;
  let count = 0;
  while ((curNode !== null) && (curNode.value !== null)) {
    // Save the previous node 
    // console.log(count)
    count++
    curNode = curNode.next
  }
  return count
}

function isEmpty(list){
  if (!list.head) {
    return 'List is empty'
  }else{
    return 'List is not empty'
  }
}

function findPrevious(list,item){
  let curNode = list.head;
  let prevNode = list.head;
  while ((curNode !== null) && (curNode.value !== item)){
    prevNode = curNode;
    curNode = curNode.next;
  }
  return prevNode;
}

function findLast(list){
  if (!list.head){
    return null
  }
  let curNode = list.head;
  while (curNode.next !== null){
    curNode = curNode.next;
  }
  return curNode;
}

// Mystery Program = Big O - O(n^k)
function WhatDoesThisProgramDo(lst) {
    let current = lst.head;
    while (current !== null) {
        let newNode = current;
        while (newNode.next !== null) {
            // if next is not null
            if (newNode.next.value === current.value) {
                // if the value after new node is equal to the current value, then the new node points to the value after that? It is skipping the second redundant value? 
                newNode.next = newNode.next.next;
            }
            else {
                // if there aren't redundant values continue normally
                newNode = newNode.next;
            }
        }
        current = current.next;
    }
}


// Reverse a list  
// Write an algorithm to reverse a linked list. The time complexity of your algorithm should be linear (O(n)). For this exercise, notice we are not asking you just to print the linked list in reverse or use another linked list to store the value in reverse order. Your program should reverse the direction of a given singly linked list. In other words, all pointers should point backward. BONUS: Solve this problem using both recursive and iterative algorithms.

function reverseReverse(list){
    //  go through and switch their directions one at a time so [a-->] [b-->] [c-->] [d-null]
    // [a-null] [b-<-] [c-->] [d-null]
    // [a-null] [b-<-] [c-<-] [d-null]
    // [a-null] [b-<-] [c-<-] [d-<-]
    let curNode = list.head;
    let prevNode;
    let placeholderNode;
    while (curNode){
        // placeholder is c
        placeholderNode = curNode.next;
        // set curNode.next (a) to previous
        curNode.next = prevNode;
        // previous node now set to current node for next iteration
        prevNode = curNode;
        // curNode now (c) for next iteration
        curNode = placeholderNode;
    }
    list.head = prevNode;
    return list
}

function recurseReverseReverse(head){
    // recursion
    // let head = list.head;
    
    if (head === null){
      return head
    }
    if (head.next === null) {
      return head
    }
  
    let nextNode = recurseReverseReverse(head.next)
    head.next.next = head;
    head.next = null;
  
    return nextNode;
}
  

// 3rd from the end
function thirdFromEnd(list){
    // find size: size() code
    let size = this.size(list);
    let arrList = this.display(list);

    // Start at the head
    let curNode = list.head;
    // If the list is empty
    if (!list.head) {
        return null;
    }
    // Check for the item 
    while (curNode.value !== arrList[size-3]) {
        /* Return null if it's the end of the list 
            and the item is not on the list */
        if (curNode.next === null) {
            return null;
        }
        else {
            // Otherwise, keep looking 
            curNode = curNode.next;
        }
    }
    // Found it
    return curNode;
}


function midList(list){
    // geeksforgeeks rocks
    let oneTraverse = list.head;
    let twoTraverse = list.head;
  
    if(list.head != null){
      while (twoTraverse != null && twoTraverse.next != null){
        twoTraverse = twoTraverse.next.next;
        oneTraverse = oneTraverse.next;
      }
      return oneTraverse
    }
}
  
function mainTwo(){
    let CycleList = new LinkedList();
    CycleList.insertLast('first');
    CycleList.insertLast('second');
    CycleList.insertLast('third');
    CycleList.insertLast('fourth');
    CycleList.insertLast('fifth');
    CycleList.head.next.next.next.next.next = CycleList.head.next;

    let checkCycled = this.cycleCheck(CycleList);
    console.log(checkCycled)
}
  
mainTwo()

function cycleCheck(list){
    let oneTraverse = list.head;
    let twoTraverse = list.head;


    while (oneTraverse != null && twoTraverse != null && twoTraverse.next != null){
        twoTraverse = twoTraverse.next.next;
        oneTraverse = oneTraverse.next;
        if (oneTraverse == twoTraverse) {
        return true
        }
    }
    return false
}
  

// sorting lists
function mainThree(){
    let NumList = new LinkedList();
    NumList.insertLast(3);
    NumList.insertLast(2);
    NumList.insertLast(5);
    NumList.insertLast(7);
    NumList.insertLast(1);
  
    // console.log(NumList)
    let sortedNumList = this.sort(NumList.head);
    console.log(sortedNumList)
}
  
mainThree()
  
function sortedMerge(nodeA,nodeB){
    // check values at each step, and switch the data at each checkpoint
    // let curNode = list.head;
    // console.log('sortedMerge ran')
    let result = null;
    if (nodeA == null){
      return nodeB;
    }
    if (nodeB == null){
      return nodeA;
    }
  
    if (nodeA.value <= nodeB.value){
      result = nodeA;
      result.next = sortedMerge(nodeA.next,nodeB);
    }
    else {
      result = nodeB;
      result.next = sortedMerge(nodeA,nodeB.next)
    }
    return result;
}
  
function sort(head){
    // console.log('sort ran')
    if(head == null || head.next == null) {
        return head;
    }

    let mid = this.getMidList(head);
    // console.log(mid)
    let midPlus = mid.next;

    mid.next = null;

    let left = sort(head);
    // console.log(left)
    let right = sort(midPlus);
    // console.log(right)

    let sortedList = sortedMerge(left, right);
    // console.log(sortedList)
    return sortedList;
}
  
function getMidList(head){
    // geeksforgeeks rocks
    let oneTraverse = head;
    let twoTraverse = head;
    if (head == null){
        return head;
    }

    while (twoTraverse.next != null && twoTraverse.next.next != null){
        twoTraverse = twoTraverse.next.next;
        oneTraverse = oneTraverse.next;
    }
    return oneTraverse
}
