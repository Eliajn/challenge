const Node = require('./node.js');
var NodeTree = function(input) {
    this.nodes = [];
    this.getRootNode = function() {
        for ( var i = 0; i < this.nodes.length; i++) {
            if(!this.nodes[i].supervisor) {
                return this.nodes[i];
            }
        }
        return null;
    }
    this.findNodeByName = function(name) {
        for (var i = 0; i < this.nodes.length; i++) {
            if (this.nodes[i].name === name) {
                return this.nodes[i];
            }
        }
        return null;
    }
    this.createNode = function(name) {
        var node = new Node(name);
        this.nodes.push(node);
    }
}
module.exports = NodeTree;