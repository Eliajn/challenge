const createTree = require('./js/createtree.js');
require('./css/styles.css');
var obj = {'Rana':'Hiba',
           'Samar': 'Sara',
           'Hassan': 'Sara',
           'Sara': 'Hiba',
           'Hiba': 'Siroun'};

var nodeTree = createTree(obj);

var node = nodeTree.getRootNode();

// function elia(node){
//     for(var n in node.supervised){
     
//      return elia(node.supervised[n]);
//     }
//     console.log(node.name);
// }
// console.log(elia(node));
// elia(node);

function submit_by_tag () {
    var jsonObject= document.getElementById('jsonObject').value;
    this.IsJsonString = function(str) {
        try {
            JSON.parse(str);
        } catch (e) {
            return false;
        }
        return true;
    }

    if(!this.IsJsonString(jsonObject)) {
        alert("not json");
    } else {
        console.log(jsonObject);
    }
};
window.submit = submit_by_tag;
