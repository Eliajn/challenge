var Node = function(name) {
    this.name = name;
    this.supervisor = null;
    this.supervising = [];

    this.setSupervisor = function (input) {
        this.supervisor = input;
    }
    this.setSupervising = function (input) {
        this.supervising.push(input);
    }
}

module.exports = Node;