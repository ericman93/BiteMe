foodiesApp.filter('hostTypeName', function () {
    return function (type) {
        var text;
        switch (type) {
            case 0:
                text = "בית"
                break;
            case 1:
                text = "מסעדה"
                break;
            default:
                text = ""
        }

        return text;
    }
});