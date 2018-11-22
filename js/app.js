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