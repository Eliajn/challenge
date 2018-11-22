const NodeTree = require('./nodetree.js');

function createTree(input) {
    var nodeTree = new NodeTree;
    
    for (var key in input) {
        if(!nodeTree.findNodeByName(key)) {
            nodeTree.createNode(key);
        }
        if(!nodeTree.findNodeByName(input[key])){
            nodeTree.createNode(input[key]);
        }
    }
    for (var key in input) {
        var supervisor = nodeTree.findNodeByName(input[key]);
        var supervising = nodeTree.findNodeByName(key);
        supervisor.setSupervising(supervising);
        supervising.setSupervisor(supervisor);
    }
    return nodeTree;
}

module.exports = createTree;