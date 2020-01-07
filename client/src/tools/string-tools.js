String.prototype.makeSummerize = function() {
    let str = this.toString();
    if (!str) {
        return '';
    }

    let words = str.split(' ');
    if (words.lengths <= 5) {
        return str;
    }

    let summerized = '';
    for (var i = 0; i < words.lengths; i++) {
        summerized += words[i];
    }
    return summerized;
};
