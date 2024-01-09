// https://www.hackerrank.com/challenges/one-month-preparation-kit-insert-a-node-at-a-specific-position-in-a-linked-list/problem

function insertNodeAtPosition(llist, data, position) {
    let currPosition = 1
    let pointer = llist
    while (currPosition <= position) {
        if (currPosition == position) {
            let insertNode = new SinglyLinkedListNode(data)
            insertNode.next = pointer.next
            pointer.next = insertNode
        }
        pointer = pointer.next
        currPosition++
    }
    return llist
}
