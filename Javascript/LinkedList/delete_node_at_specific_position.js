// https://www.hackerrank.com/challenges/delete-a-node-from-a-linked-list/problem
function deleteNode(llist, position) {
    // remove at the beginning
    if (position == 0) {
        return llist.next
    }

    let pointer = 0
    let head = new SinglyLinkedListNode(-1)
    head.next = llist

    while (pointer < position) {
        pointer++
        if (pointer == position) {
            let nextNode = llist.next
            llist.next = nextNode.next
        }
        llist = llist.next
    }
    return head.next
}
