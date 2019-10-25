var passwordViewModel = {
    currentPassword: ko.observable("ABCd"),
    newPassword: ko.observable("abcD"),
    confirmNewPassword: ko.observable("abcD")
}
ko.applyBindings(passwordViewModel);