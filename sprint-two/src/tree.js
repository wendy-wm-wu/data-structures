var Tree = function(value) {
  var newTree = Object.create(treeMethods);
  newTree.value = value;
  // your code here
  newTree.children = [];  // fix me
  //an array containing a number of subtrees 
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
	//sets the target as a 2node and adds that node as a child of the tree 
	//set value as a node that adds the node as a child of the tree
	//if no children, add child 
	// value = this.value; 
	var newTree = Tree(value);  
	this.children.push(newTree);
};

treeMethods.contains = function(target) {
	//takes an input and returns a boolean to reflect whether it can be found as the value of the target node or any descendent node
	//iterate through children subtrees
	//traverse through each element using recursion
	//base case
	//if node matches target
	//return true
	//else, return false 
	var node = Tree(target);
	var flag = false;

	function recurse(node) {
		if(node.value === target) {
			flag = true; 
		}
		for (let i = 0; i < node.children.length; i++) {
			recurse(node.children[i]);
		}
	} 
	recurse(this);
	return flag; 
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
