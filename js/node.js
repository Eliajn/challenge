var Node = function(name) {
    this.name = name;
    this.supervisor = null;
    this.supervised = [];

    this.setSupervisor = function (supervisor) {
        this.supervisor = supervisor;
    }
    this.setSupervised = function (supervisor) {
        this.supervised.push(supervisor);
        supervisor.setSupervisor(this);
    }
    // this.getSupervised = function() {
    //     return this.supervised;
    // }
}

module.exports = Node;