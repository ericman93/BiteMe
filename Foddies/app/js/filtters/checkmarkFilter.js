foodiesApp.filter('checkmark', function () {
    return function (success) {
        return success ? "glyphicon-ok" : "glyphicon-remove"
    }
});