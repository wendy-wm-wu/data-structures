var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.storageSize = 0; 
};

Stack.prototype.push = function(value) {
	this.storage[this.storageSize] = value;
	this.storageSize++; 
};

Stack.prototype.pop = function() {
	if(this.storageSize > 0) {
		this.storageSize--;
		let data = this.storage[this.storageSize]; 
		delete this.storage[this.storageSize];
		return data; 
	}
};

Stack.prototype.size = function() {
	return Object.entries(this.storage).length;	
};


