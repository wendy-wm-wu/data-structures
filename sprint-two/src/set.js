var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {}; // fix me

  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {

	this._storage[item] = item; 
	//takes any string to add to the set 
	//must be unique 

};

setPrototype.contains = function(item) {
  let flag = false;
	for (let key in this._storage) {
		if(key === item) {
			flag = true; 
		}
	}
	return flag; 
};

setPrototype.remove = function(item) {
	for (let key in this._storage) {
		if(key === item) {
			delete this._storage[key];
		}
	}
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
