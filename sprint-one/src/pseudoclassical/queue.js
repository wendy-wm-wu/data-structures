var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.startOfQueue = 0; 
  this.endOfQueue = 0; 
};

Queue.prototype.enqueue = function(value) {
	this.storage[this.endOfQueue]  = value; 
	this.endOfQueue++; 
};

Queue.prototype.dequeue = function() {
	let item = this.storage[this.startOfQueue];
	delete this.storage[this.startOfQueue];
	this.startOfQueue++; 
	return item; 
};

Queue.prototype.size = function() {
	return Object.entries(this.storage).length;	
};

