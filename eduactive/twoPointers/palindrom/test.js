const isPalindrome = require("./palindrom");

test("isPalindrome(aabb) works correct", () => {

    expect(isPalindrome('hhh14')).toBeFalsy()
    expect(isPalindrome('aabb')).toBeFalsy()
    expect(isPalindrome('aaaa')).toBeTruthy()

});
