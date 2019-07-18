class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
  	this.storage = {};
  	this.storageSize = 0; 
  }

  push(value) {
  	this.storage[this.storageSize] = value;
	this.storageSize++; 
  }

  pop() {
  	if(this.storageSize > 0) {
		this.storageSize--;
		let data = this.storage[this.storageSize]; 
		delete this.storage[this.storageSize];
		return data; 
	}
  }

  size() {
  	return Object.entries(this.storage).length;
  }

}