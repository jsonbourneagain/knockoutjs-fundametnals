// model
var person = {
    children: [
        { firstName: "Jonnie", age: 3 },
        { firstName: "Jane", age: 5 },
        { firstName: "Richard", age: 7 },
        { firstName: "Mary", age: 9 },
    ],
    showAbout: false
};
// viewmodel

var PersonViewModel = function () {
    var self = this;
    self.children = person.children;
    self.showAbout = ko.observable(person.showAbout);
};
// apply

ko.applyBindings(PersonViewModel);
