const createTree = require('./js/createtree.js');

var obj = {'Rana':'Hiba',
           'Samar': 'Sara',
           'Hassan': 'Sara',
           'Sara': 'Hiba',
           'Hiba': 'Siroun'};

var nodeTree = createTree(obj);

var node = nodeTree.getRootNode();
console.log(node);
function elia(node){
    for(var n in node.supervised){
     return elia(node.supervised[n]);
    }
    
  
}
console.log(elia(node));