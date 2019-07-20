

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit); //will be a nested array that holds key, value pairs in a tuple if there are collisions
  // this.bucket = [];
  // this.tuple = []; //[key, value]
  //define index here using the hashcode
  //getIndexBelowMaxForKey(str, max)
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //use .set to set the items in the limited with index and value 
  var tuple = [k, v]; //[key, value]
  var bucket = this._storage.get(index); //bucket will be an array at the index 
  console.log(bucket);
  
  if(bucket) { //if there's a key, value pair already in existence at the index 
  	for (let i = 0; i < bucket.length; i++) {  //bucket is an array of arrays (nested array) //iterate through nested array 
  		if(bucket[i][0] === k) { //stating that each array in the bucket is a key value pair if it exists 
  			bucket[i][1] = v; 
  		} else {	//else, if doesn't exist, then we will push the tuple to the bucket 
  			bucket.push(tuple);
  		}
  	}	
  }	else {
  	this._storage.set(index, [tuple]); //if there is no bucket(no key value pair at the index), we will set the index with the key, value pair 
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);

  for (let i = 0; i < bucket.length; i++) {
  	if(bucket[i][0] === k) {
  		return bucket[i][1]; 
  	}
  }

  //use .get to get the item using the index 
  //check the tuple to see if it's there .. use .each 
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //use the index to find the key value pair to remove
  //iterate through the tuple to check as well 
  var bucket = this._storage.get(index); 

  if(bucket) {
  	for (let i = 0; i < bucket.length; i++) {
  		if(bucket[i][0] === k) {
  			bucket.splice(i, 1); 
  		}
  	}
  	delete this._storage[index]; 
  }
 
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


