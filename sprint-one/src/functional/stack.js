var Stack = function() {
  var size = 0; 
  var someInstance = {};

  // Use an object with numeric keys to store values
  //key is index, value 
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    storage[size] = value; 
    size++; 
  };

  someInstance.pop = function() {
    if(size > 0) {
      size--; 
      //removes one value so index decreases 
    }
    let data = storage[size]; 
    delete data;
    return data;
  };

  someInstance.size = function() {
     return size;
  };

  return someInstance;
};
