// model
var libraryModel = { LibraryName: "My home library", AmountOfBooks: "5" };
var libraryViewModel = {
    LibraryName: ko.observable("My home library"),
    AmountOfBooks: ko.observable("5")
}
// var libraryViewModel = ko.mapping.fromJS(libraryModel);

// getModelFromServer(){
//     return { LibraryName: "My home library", AmountOfBooks: "5" }
// }
// apply

ko.applyBindings(libraryViewModel);
