// model
var person = {
    children: ["Jonnie", "Jane", "Richard", "Mary"]
};
// viewmodel

var PersonViewModel = function() {
    var self = this;
    self.children = ko.observableArray(person.children);
    self.newChild = ko.observable("");
    self.addChildEnabled = ko.computed(function() {
      return self.newChild().length > 0;
    });
    self.addChild = function() {
      if (self.addChildEnabled()) {
        self.children.push(self.newChild());
        self.newChild("");
      }
    };
  };
// apply

ko.applyBindings(PersonViewModel);
