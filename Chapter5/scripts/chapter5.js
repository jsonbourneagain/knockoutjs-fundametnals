// model
var libraryViewModel = {
    LibraryName: ko.observable("My home library"),
    AmountOfBooks: ko.observable("5"),
};
libraryViewModel.HasBooks = ko.computed(function(){
    return this.AmountOfBooks() > 0
}, libraryViewModel)
// var jsonObject = ko.toJS(libraryViewModel);
// jsonObject = {
//     LibraryName: "My home library",
//     AmountOfBooks: "5",
//     HasBooks: true
// }
var jsonString = ko.toJSON(libraryViewModel);
// jsonString = "{'LibraryName': 'My home library', 'AmountOfBooks': '5', 'HasBooks':true}"
var jsonObject = JSON.parse(jsonString);
libraryViewModel.LibraryName(jsonObject.LibraryName);
libraryViewModel.AmountOfBooks(jsonObject.AmountOfBooks);

// apply

ko.applyBindings(libraryViewModel);
