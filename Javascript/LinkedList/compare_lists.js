// https://www.hackerrank.com/challenges/compare-two-linked-lists/problem

function CompareLists(llist1, llist2) {
    while (llist1 != null && llist2 != null) {
        if (llist1.data != llist2.data) {
            return 0
        }
        llist1 = llist1.next
        llist2 = llist2.next
    }

    if (
        (llist1 == null && llist2 != null) ||
        (llist1 != null && llist2 == null)
    ) {
        return 0
    }

    return 1
}
