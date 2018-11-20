const createTree = require('./createtree.js');

var obj = {'Rana':'Hiba',
           'Samar': 'Sara',
           'Hassan': 'Sara',
           'Sara': 'Hiba',
           'Hiba': 'Siroun'};

var nodeTree = createTree(obj);

var node = nodeTree.getRootNode();

function elia(node){
    for(var n in node.supervised){
     return elia(node.supervised[n]);
    }
    
  
}
console.log(elia(node));