/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
    const result = [];
    maxCandies = Math.max(...candies);
    for (a = 0; a < candies.length; a++) {
        candies[a] += extraCandies;
        if (candies[a] >= maxCandies) {
            result.push(true);
        }
        else {
            result.push(false);
        }
    }
    return result;
};
