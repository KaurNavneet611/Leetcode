/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
    let word3 = "";
    let i = Math.max(word1.length, word2.length)
    for (a = 0; a < i; a++) {
       if(word1[a]) word3 += word1[a];
       if(word2[a]) word3 += word2[a];
    }
    return word3;
};
