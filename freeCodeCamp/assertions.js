var assert = require('assert');

function assertRegexTest(sentence, regex, bool_result = true) {
    assert(regex.test(sentence) == bool_result);
    console.log("Verified [", bool_result, "] for Regex [", regex, "] test on string [", sentence, "]");
}

// add the code below
module.exports = { assertRegexTest };