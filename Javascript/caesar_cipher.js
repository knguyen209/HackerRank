function caesarCipher(s, k) {
    // Write your code here
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'

    const sliced = alphabet.slice(0, k % 26)
    const substr = alphabet.substring(k % 26, alphabet.length)
    const rotatedAlphabet = substr + sliced

    let result = ''
    for (let i = 0; i < s.length; i++) {
        let cipherIndex = alphabet.indexOf(s[i].toLowerCase())
        let c = rotatedAlphabet[cipherIndex]
        if (cipherIndex >= 0) {
            result += s[i] === s[i].toUpperCase() ? c.toUpperCase() : c
        } else {
            result += s[i]
        }
    }
    console.log(result)
}

// caesarCipher('middle-Outz', 2)
caesarCipher('middle-Outz', 0)
