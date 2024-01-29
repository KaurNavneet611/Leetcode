/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function (str1, str2) {

    if (str1 + str2 !== str2 + str1) {
        return "";
    }

    n = str1.length;
    k = str2.length;

    while (k !== 0) {
        let temp = k;
        k = n % k;
        n = temp;
    }
    //console.log(n)
    return str1.slice(0, n);

};
