const {convertArrToLL, fetchLLVals} = require('./../utility/utility');

const startingLL = convertArrToLL([5, 4, 3, 2, 1]);

function removeNthFromEnd(head, n) {
    let right = head;
    let left = head;

    for (let i = 0; i < n; i++) {
        right = right.next;
    }

    if (!right) {
        return head.next;
    }

    while (right.next != null) {
        right = right.next;
        left = left.next;
    }

    left.next = left.next.next;

    return head;

}

module.exports = removeNthFromEnd;
