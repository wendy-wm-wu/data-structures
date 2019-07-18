var Stack = function() {
	var someInstance = {};
	someInstance.storage = {};
	someInstance.storageSize = 0; 
	_.extend(someInstance, stackMethods);
	return someInstance; 
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

var stackMethods = {

  push: function(value) {
  	this.storage[this.storageSize] = value; 
  	this.storageSize++;
  },

  pop: function() {
  	if(this.storageSize > 0) {
  		this.storageSize--; 
  	let data = this.storage[this.storageSize];
  	delete this.storage[this.storageSize];
  	return data;	
  	}
  },

  size: function() {
  	return this.storageSize;
  }
};


