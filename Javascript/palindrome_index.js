function isPalindrome(s, startIdx, endIdx) {
    while (startIdx < endIdx) {
        if (s[startIdx] != s[endIdx]) {
            return false
        }
        startIdx++
        endIdx--
    }
    return true
}

function palindromeIndex(s) {
    let leftIdx = 0
    let rightIdx = s.length - 1
    while (leftIdx < rightIdx) {
        if (s[leftIdx] === s[rightIdx]) {
            leftIdx++
            rightIdx--
        } else {
            if (isPalindrome(s, leftIdx + 1, rightIdx)) {
                return leftIdx
            } else if (isPalindrome(s, leftIdx, rightIdx - 1)) {
                return rightIdx
            } else {
                return -1
            }
        }
    }
    return -1
}

console.log(palindromeIndex('cwnswtuhmyaljkqlqjjqlqkjlaymhutwsnwcw'))
