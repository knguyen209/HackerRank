// https://www.hackerrank.com/challenges/insert-a-node-at-a-specific-position-in-a-linked-list/problem
function insertNodeAtPosition(llist, data, position) {
    let pointer = 0
    let head = new SinglyLinkedListNode(-1)
    head.next = llist
    while (pointer < position) {
        pointer++
        if (pointer == position) {
            let nextNode = llist.next
            let insertNode = new SinglyLinkedListNode(data)
            insertNode.next = nextNode
            llist.next = insertNode
        }
        llist = llist.next
    }
    return head.next
}
