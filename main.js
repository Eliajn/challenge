const createTree = require('./js/createtree.js');
require('./css/styles.css');

function submit_by_tag () {
    var jsonObject= document.getElementById('jsonObject').value;
    var parsed = JSON.parse(jsonObject);
    var nodeTree = createTree(parsed);
    var node = nodeTree.getRootNode();
    console.log("root-node:" + node.name);
    this.createObject = function (node) {
            var obj={};
            var array =[];
            for (var n in node.supervising) {
                array.push(this.createObject(node.supervising[n]));
            }
            var name  = node.name;
            obj[name] = array;
            return obj;
    };
    this.drow = function(obj) {
        var html = '';
        var keys  = Object.keys(obj);
        var name = keys[0];
        if(obj[name].length == 0){
            html  = "<h1>"+name+"</h1>\n";
        } else{
            html  = "<h1>"+name+"</h1>\n<ul>\n";
        }
        

        for(var i = 0; i < obj[name].length; i++){
            var li = "\t<li>\n" + this.drow(obj[name][i]) + "</li>\n";
            html = html + li;
        }
        if(obj[name].length == 0){
            return html;
        } else{
            return html + "</ul>";
        }
        
    }
    this.IsJsonString = function(str) {
        try {
            JSON.parse(str);
        } catch (e) {
            return false;
        }
        return true;
    };
    if(!this.IsJsonString(jsonObject)) {
        alert("Please enter a JSON object and try again");
    } else {
        console.log(jsonObject);
        var constructedObject = this.createObject(node);
        console.log(constructedObject);
        mydiv = document.getElementById("tree");
        mydiv.innerHTML += this.drow(constructedObject);
    }
}
window.submit = submit_by_tag;