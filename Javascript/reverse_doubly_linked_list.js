// https://www.hackerrank.com/challenges/one-month-preparation-kit-reverse-a-doubly-linked-list/problem

function reverse(llist) {
    // Write your code here
    let prev = null

    while (llist != null) {
        let next = llist.next
        llist.next = prev
        llist.prev = next

        prev = llist
        llist = next
    }

    return prev
}
