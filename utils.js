function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
}

function getURLParameterByName(name) {
    var url = unescape(window.location.href);
    var name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"), results = regex.exec(url);
    if (!results)
        return null;
    if (!results[2])
        return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
