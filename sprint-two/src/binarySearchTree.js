var BinarySearchTree = function(value) {
	//psedoclassical implementation

	var binaryTree = Object.create(binarySearchTreeMethods); 
	binaryTree.value = value; 
	binaryTree.left = null;
	binaryTree.right = null;

	return binaryTree; 
};

//each BST can only have 0, 1, or 2 children.. so maybe push 

var binarySearchTreeMethods = {

	//check value and use left or right functions above to help 
	//if smaller, go left, until there's an opening
	//if larger, go right, until there's an opening 
	insert: function(value) {
		var treeNode = BinarySearchTree(value);

		function searchNode(node) {
			if(value < node.value) {
				if(node.left === null) {
					node.left = treeNode; 
				} else {
					searchNode(node.left); 
				}
			} 
			if(value > node.value) {
				if(node.right === null) {
					node.right = treeNode;
				} else {
					searchNode(node.right);
				}
			}
		}		
		searchNode(this);
	}, 
	
	contains: function(value) {
	//use recursion 
	//check array to see if item exists in array 
	//initialize flag as false 
	//helper function 
		//if value is less than root node
			// go left 
			//if item === value
				//set flag to true
				//else, recurse to left 
		//if value is larger than root node
			//go right
			//if item === value
				//set flag to true
					//recurse to right 
		//return flag

		let flag = false; 

		function searchNode(node) {
			//check if node is null first so you can catch it in the beginning 
			if(node === null) { //base case 
				return flag; 
			}
			if(value === node.value) { //base case 
				flag = true; 
			}
			if(value < node.value) {
				searchNode(node.left); 
			}
			if(value > node.value) {
				searchNode(node.right); 
			}
		}
		searchNode(this); 
		return flag;
	},

	depthFirstLog: function(cb) {
		//helper function
		//if node isn't null, apply recursion
		//iterate through each node and apply callback 
		function recurse(node) {
			// if(node !== null) {
				cb(node.value);
			// } 
			if(node.left !== null) {
				recurse(node.left);
			}
			if(node.right !== null) {
				recurse(node.right);
			}
		}
	recurse(this);	
	}

}
//instantiate a class treeNode for the tree learn












/*
 * Complexity: What is the time complexity of the above functions?
 */
