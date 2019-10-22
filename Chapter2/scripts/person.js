// model
var person = {
    wife:{
        firstName: "Jessica",
        lastName: "Doe"
    }
};
// viewmodel

var PersonViewModel = function () {
    var self = this;
    self.wife = ko.observable(person.wife)
};
// apply

ko.applyBindings(PersonViewModel);
