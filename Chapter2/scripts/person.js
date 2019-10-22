// model
var person = {
    children: ["Jonnie", "Jane", "Richard", "Mary"],
    selectedChildren: ["Jonnie", "Richard"]
};
// viewmodel

var PersonViewModel = function(){
    var self = this;
    self.children = person.children;
    self.selectedChildren = person.selectedChildren
};
// apply

ko.applyBindings(PersonViewModel);
