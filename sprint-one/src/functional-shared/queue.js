var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
  someInstance.oldestItem = 0; 
  someInstance.newestItem = 0;
  //one for newest item
  //one for oldest item 

  _.extend(someInstance, queueMethods);

  return someInstance;
};

var queueMethods = {

	enqueue: function(value) {
		this.storage[this.newestItem] = value; //stored at index 0 
		this.newestItem++; //1
	},

	dequeue: function() {
		let item = this.storage[this.oldestItem];
		delete this.storage[this.oldestItem];
		this.oldestItem++;
		return item;
	},

	size: function() {
		return Object.entries(this.storage).length;	
	}	
};


