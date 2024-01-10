// https://www.hackerrank.com/challenges/insert-a-node-at-the-tail-of-a-linked-list/problem
function insertNodeAtTail(head, data) {
    if (head == null) {
        head = new SinglyLinkedListNode(data)
        return head
    } else {
        let dummy = new SinglyLinkedListNode(-1)
        dummy.next = head
        while (head != null) {
            if (head.next == null) {
                let insertNode = new SinglyLinkedListNode(data)
                head.next = insertNode
                break
            }
            head = head.next
        }
        return dummy.next
    }
}
