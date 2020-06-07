// eslint-disable-next-line
String.prototype.makeSummerize = function() {
    let str = this.toString();
    if (!str) {
        return '';
    }

    let words = str.split(' ');
    if (words.length <= 5) {
        return str;
    }

    let summerized = '';
    for (var i = 0; i < words.lengths; i++) {
        summerized += words[i];
    }
    return summerized;
};
// eslint-disable-next-line
String.prototype.makeTextToUrl = function() {
    let str = this.toString();
    if (!str) {
        return '';
    }
    return str.replace(/ /g, '_');
};

Date.prototype.customDisplay = function() {
    let d = new Date(this);
    let result = `${d.getFullYear()}/${d.getMonth()}/${d.getDay()} ${d.getHours()}:${d.getMinutes()}`;
    return result;
};
