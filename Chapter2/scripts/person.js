
var person = {
    firstName: "John",
    age: 30,
    about: "John's favorite site is <a href='http://www.packtpub.com'>PacktPub</a>.",
    favoriteColor: "red",
    favoriteUrl: "http://www.packtpub.com",
    favoriteSite: "PackPub",
    isMarried: false
};

// viewmodel

var personViewModel = function () {
    var self = this;
    self.firstName = ko.observable(person.firstName);
    self.age = ko.observable(person.age);
    self.about = ko.observable(person.about);
    self.favoriteColor = ko.observable(person.favoriteColor);
    self.favoriteUrl = ko.observable(person.favoriteUrl);
    self.favoriteSite = ko.observable(person.favoriteSite);
    self.growOld = function () {
        var previousAge = self.age();
        self.age(previousAge + 1);
    }
    self.aboutEnabled = ko.observable(false);
    self.showAbout = function () {
        self.aboutEnabled(true);
    };
    self.hideAbout = function () {
        self.aboutEnabled(false);
    };
    self.isMarried = ko.observable(person.isMarried);

};
// apply

ko.applyBindings(personViewModel);
