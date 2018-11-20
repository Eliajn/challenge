const createTree = require('./js/createtree.js');
const submit_by_tag = require('./js/app.js');
var obj = {'Rana':'Hiba',
           'Samar': 'Sara',
           'Hassan': 'Sara',
           'Sara': 'Hiba',
           'Hiba': 'Siroun'};

var nodeTree = createTree(obj);

var node = nodeTree.getRootNode();

function elia(node){
    for(var n in node.supervisor){
        console.log(n);
     return elia(node.supervisor[n]);
    }
}
console.log(elia(node));