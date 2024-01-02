// Password Decryption
function decryptPassword(s) {
    let arr = s.split('')
    let decryptedArr = []
    let numericArr = arr.filter((c) => isNumeric(c))
    let nonNumericArr = arr.filter((c) => !isNumeric(c))

    for (let i = 0; i < nonNumericArr.length; i++) {
        if (
            isUpperCase(nonNumericArr[i]) &&
            isLowerCase(nonNumericArr[i + 1]) &&
            nonNumericArr[i + 2] == '*'
        ) {
            decryptedArr.push(nonNumericArr[i + 1])
            decryptedArr.push(nonNumericArr[i])
            i += 2
        } else {
            if (nonNumericArr[i] == '0') {
                decryptedArr.push(numericArr.pop())
            } else {
                decryptedArr.push(nonNumericArr[i])
            }
        }
    }
    // for (let i = 0; i < arr.length; i++) {
    //     if (!isNumeric(arr[i])) {
    //         if (i + 1 < arr.length) {
    //             if (isUpperCase(arr[i]) && isLowerCase(arr[i + 1])) {
    //                 decryptedArr.push(arr[i + 1])
    //                 decryptedArr.push(arr[i])
    //                 i += 2
    //             }
    //             if (arr[i] == '0') {
    //                 decryptedArr.push(numericArr.pop())
    //             }
    //         } else {
    //             if (arr[i] == '0') {
    //                 decryptedArr.push(numericArr.pop())
    //             } else {
    //                 decryptedArr.push(arr[i])
    //             }
    //         }
    //     }
    // }

    return decryptedArr.join('')
}

function isUpperCase(ch) {
    if (ch != undefined) return ch == ch.toUpperCase()
    return false
}

function isLowerCase(ch) {
    if (ch != undefined) return ch == ch.toLowerCase()
    return false
}

function isNumeric(ch) {
    return ch.charCodeAt(0) >= 49 && ch.charCodeAt(0) <= 57
}

console.log(decryptPassword('51Pa*0Lp*0e'))
// console.log(parseInt('9'.charCodeAt(0)))
