// model
var person = {
    firstName: "John",
    lastName: "Doe"
};
// viewmodel

var PersonViewModel = function () {
    var self = this;
    self.firstName = ko.observable(person.firstName);
    self.lastName = ko.observable(person.lastName);
    self.fullName = ko.computed(function () {
        return self.firstName() + " " + self.lastName();
    })
};
// apply

ko.applyBindings(PersonViewModel);
