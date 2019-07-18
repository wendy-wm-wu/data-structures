class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
  	this.storage = {};
  	this.endOfQueue = 0; 
  	this.startOfQueue = 0; 
  }

  enqueue(value) {
  	this.storage[this.endOfQueue]  = value; 
	this.endOfQueue++; 
  }

  dequeue() {
  	let item = this.storage[this.startOfQueue];
	delete this.storage[this.startOfQueue];
	this.startOfQueue++; 
	return item;
  }

  size() {
  	return Object.entries(this.storage).length;	
  }

}
