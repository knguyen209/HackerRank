function reverse(llist) {
    let prev = null
    let curr = llist
    let next = null

    while (curr != null) {
        next = curr.next
        curr.next = prev
        prev = curr
        curr = next
    }

    return prev
}
