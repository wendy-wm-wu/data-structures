var GraphNode = function(value) {
    this.value = value;
    this.edgeConnections = [];

}
// Instantiate a new graph
var Graph = function() {
    this.storage = {};
    this.key = 0;
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
    var newNode = new GraphNode(node);
    this.storage[this.key] = newNode;
    //Note: key is always one more than last GraphNode;
    this.key++;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
    //Base case: If the graph is empty, then return false
    if (!Object.keys(this.storage).length) {
        return false;
    }
    for (var key in this.storage) {
        if (this.storage[key].value === node) {
            return true;
        }
        return false;
    }
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
    for (var key in this.storage) {
        if (this.storage[key].value === node) {
            delete this.storage[key];
        }
    }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
    var fromNodeCheck = false;
    var toNodeCheck = false;
    for (var key in this.storage) {
        if (this.storage[key].value === fromNode) {
            if (this.storage[key].edgeConnections.includes(toNode)) {
                fromNodeCheck = true;
            }
        }
        if (this.storage[key].value === toNode) {
            if (this.storage[key].edgeConnections.includes(fromNode)) {
                toNodeCheck = true;
            }
        }
    }
    if (fromNodeCheck === true && toNodeCheck === true) {
        return true;
    } else {
        return false;
    }
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
    for (var key in this.storage) {
        if (this.storage[key].value === fromNode) {
            this.storage[key].edgeConnections.push(toNode);
        }
        if (this.storage[key].value === toNode) {
            this.storage[key].edgeConnections.push(fromNode);
        }
    }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
    for (var key in this.storage) {
        if (this.storage[key].value === fromNode) {
            for (var i = 0; i < this.storage[key].edgeConnections.length; i++) {
                if (this.storage[key].edgeConnections[i] === toNode) {
                    this.storage[key].edgeConnections.splice(i, 1);
                }    
            }
        }
        if (this.storage[key].value === toNode) {
            for (var y = 0; this.storage[key].edgeConnections.length; y++) {
                if (this.storage[key].edgeConnections[y] === fromNode) {
                    this.storage[key].edgeConnections.splice(y, 1);
                }
            }
        }
    }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
    for (let key in this.storage) {
        cb(this.storage[key].value);
    }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */