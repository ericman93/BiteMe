foodiesApp.filter('alert', function () {
    return function (success) {
        return success ? "alert-success" : "alert-danger"
    }
});