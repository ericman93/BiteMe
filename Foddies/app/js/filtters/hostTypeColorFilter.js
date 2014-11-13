foodiesApp.filter('hostTypeColor', function () {
    return function (type) {
        var text;
        switch (type) {
            case 0:
                text = "label-primary"
                break;
            case 1:
                text = "label-success"
                break;
            default:
                text = ""
        }

        return text;
    }
});