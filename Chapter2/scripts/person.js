// model
var person = {
    children: [
        { firstName: "Jonnie", age: 3 },
        { firstName: "Jane", age: 5 },
        { firstName: "Richard", age: 7 },
        { firstName: "Mary", age: 9 },
    ]
};
// viewmodel

var PersonViewModel = function () {
    var self = this;
    self.children = person.children;
};
// apply

ko.applyBindings(PersonViewModel);
