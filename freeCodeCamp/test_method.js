const assertions = require("../assertions/assertions");

// "Hello, World!" contains "Hello"
assertions.assertRegexTest("Hello, World!", /Hello/);

// Waldo is contained in the string
assertions.assertRegexTest("Somewhere Waldo is hiding in this text.", /Waldo/);

// case sentitive: "waldo" is NOT contained in the string
assertions.assertRegexTest("Somewhere Waldo is hiding in this text.", /waldo/, false);

// "the sentence contains on of the alternative"
assertions.assertRegexTest("James has a pet cat.", /dog|cat|bird|fish/);

// case insensitive freeCodeCamp - use the i flaglet
assertions.assertRegexTest("freeCodeCamp", /freecodecamp/i);
