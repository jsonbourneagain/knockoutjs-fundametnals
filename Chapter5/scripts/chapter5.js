ko.extenders.numeric = function (target, precision) {
    var result = ko.pureComputed({
        read: target,
        write: function (newValue) {
            var current = target(),
                roundingMultiplier = Math.pow(10, precision),
                newValueAsNum = isNaN(newValue) ? 0 : parseFloat(+newValue),
                valueToWrite = Math.round(newValueAsNum * roundingMultiplier) / roundingMultiplier;
            if (valueToWrite !== current) {
                target(valueToWrite);
            }
            else {
                if (newValue !== current) {
                    target.notifySubscribers(valueToWrite);
                }
            }
        }
    }).extend({ notify: 'always' });
    result(target());
    return result;
};
// function AppViewModel(one, two) {
//     this.myNumberOne = ko.observable(one).extend({ numeric: 0 });
//     this.myNumberTwo = ko.observable(two).extend({ numeric: 2 });
// }
// ko.applyBindings(new AppViewModel(221.2234, 123.4535));