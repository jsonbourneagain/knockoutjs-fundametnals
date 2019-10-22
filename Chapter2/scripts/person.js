// model
var person = {
    children: ["Jonnie", "Jane", "Richard", "Mary"]
};
// viewmodel

var PersonViewModel = function () {
    var self = this;
    self.children = ko.observableArray(person.children);
    self.selectedChildren = ko.observable([]);
    self.newChild = ko.observable("");
    self.addChildEnabled = ko.computed(function () {
        return self.newChild().length > 0;
    });
    self.addChild = function () {
        if (self.addChildEnabled()) {
            self.children.push(self.newChild());
            self.newChild("");
        }
    };
    self.removeSelectedEnabled = ko.computed(function () {
        return self.selectedChildren().length > 0;
    });
    self.removeSelected = function () {
        self.children.removeAll(self.selectedChildren());
        self.selectedChildren([]);
    }
};
// apply

ko.applyBindings(PersonViewModel);
