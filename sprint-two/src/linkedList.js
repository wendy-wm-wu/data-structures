var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    //If there are no items in LL: no head or tail
    //If there is ONE item: head and tail point to the same thing
    //IF there is more than one, head and tail now point to resepctive first and last items
    
    //Create an instance of the node class

     var newNode = Node(value);
     if(list.head === null || list.tail === null) {
      list.head = newNode;
      list.tail = newNode;
     } else {
      list.tail.next = newNode;
      list.tail = newNode; 
     }

    //Make the tail now equal/point to the newNode
    //Make the newNode point to null, indicating that it is the end
    //of the list

  };

  list.removeHead = function() {
      //if head is not empty, 
      //change head to the item next to head 
     // var temp = list.head.value; 
     // list.head = list.head.next;
     // return temp;

     var temp = list.head.value;
     list.head = list.head.next;
     return temp; 

    //Change list.head to equal to the new coming head variable
  };

  list.contains = function(target) {
    //while loop to check all the items and compare to target 
    //return boolean if it exists 
         // if not inside, return false; 
  //   if(list.head.value === target) {
  //     return true; 
  //   } 
  //   var node = list.head.next; 
  //   if (node !== null) { 
  //    while(node !== null) {  
  //     if(node.value === target) {
  //       return true; 
  //     } else {
  //       return false; 
  //     }
  //     node = node.next; 
  //     } 
  //   } else {
  //   return false; 
  // }

    let flag = false;
    function recurse(node) {
      if(node.value === target) {
        flag = true;
      }
      if(node.next !== null) {
        recurse(node.next); 
      }
    }
    recurse(list.head);
    return flag; 
  }


  return list;
};


var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */