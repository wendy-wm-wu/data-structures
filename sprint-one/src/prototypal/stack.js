var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);

  someInstance.storage = {};
  someInstance.storageSize = 0; 
  return someInstance;
};

var stackMethods = {

	push : function(value) {
		this.storage[this.storageSize] = value; 
  		this.storageSize++;
	},

	pop : function() {
		if(this.storageSize > 0) {
  		this.storageSize--; 
		let data = this.storage[this.storageSize];
		delete this.storage[this.storageSize];
		return data;	
	  	}
	},

	size : function() {
		return Object.entries(this.storage).length;	
	}

};


