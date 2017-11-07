module.exports = function(str) {
    var resStr = "";
    for (var i = 0; i < str.length; i++) {
        if (/[\$\.\[\]\+\-]/.test(str[i]))
            resStr += "\\";
        resStr += str[i];
    }
    return resStr;
}