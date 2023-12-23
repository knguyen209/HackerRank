function mergeLists(head1, head2) {
    let result = new SinglyLinkedListNode()
    let pointer = new SinglyLinkedListNode()
    pointer = result
    while (true) {
        if (head1 == null) {
            pointer.next = head2
            break
        }

        if (head2 == null) {
            pointer.next = head1
            break
        }

        if (head1.data <= head2.data) {
            pointer.next = head1
            head1 = head1.next
        } else {
            pointer.next = head2
            head2 = head2.next
        }

        pointer = pointer.next
    }

    return result.next
}
