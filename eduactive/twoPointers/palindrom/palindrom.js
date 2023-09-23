// Write a function that takes a string, s, as an input and determines whether or not it is a palindrome.

function isPalindrome(s) {

    // Replace this placeholder return statement with your code
    let array = s.split(''),
        left = 0,
        right = array.length - 1,
        middle = Math.floor(array.length / 2)

    if(array.length === 1) return true;

    while (left <= right) {
        left++;
        right--;

        if(array[left] === array[right]){
            if(middle === left){
                return true
            }else {
                continue
            }
        }else {
            return false
        }
    }

    return false;
}

module.exports = isPalindrome;