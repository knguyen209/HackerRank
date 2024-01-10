// https://www.hackerrank.com/challenges/insert-a-node-at-the-head-of-a-linked-list/problem

function insertNodeAtHead(head, data) {
    if (head == null) {
        head = new SinglyLinkedListNode(data)
        return head
    } else {
        let prevNode = new SinglyLinkedListNode(data)
        prevNode.next = head
        return prevNode
    }
}
