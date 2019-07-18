var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);

  someInstance.storage = {};
  someInstance.startOfQueue = 0; 
  someInstance.endOfQueue = 0; 

  return someInstance;

};

var queueMethods = {

	enqueue: function(value) {
		this.storage[this.endOfQueue] = value; //stored at index 0 
		this.endOfQueue++; //1
	},

	dequeue: function() {
		let item = this.storage[this.startOfQueue];
		delete this.storage[this.startOfQueue];
		this.startOfQueue++;
		return item;
	},

	size: function() {
		return Object.entries(this.storage).length;	
	}	

};


