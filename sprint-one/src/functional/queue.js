var Queue = function() {
  var someInstance = {};
  var size = 0; 
  var index = 1; 
  var firstIndex = 1;
  //First In First Out 

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[index] = value;
    index++;
    size++;
  };

  someInstance.dequeue = function() {
    //delete front item
    if(size > 0) {
      size--;
      let firstItem = storage[firstIndex];
      delete storage[firstIndex];
      firstIndex++;
      return firstItem;
    }
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
