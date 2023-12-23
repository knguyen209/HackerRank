/**
 * https://www.hackerrank.com/challenges/one-week-preparation-kit-balanced-brackets/problem
 * @param s
 * @returns
 */

function isBalanced(s) {
    let openBrackets = []

    for (let i = 0; i < s.length; i++) {
        if (s[i] == '[' || s[i] == '(' || s[i] == '{') {
            openBrackets.push(s[i])
        } else {
            let lastItem = openBrackets.pop()
            if (
                (s[i] == ')' && lastItem != '(') ||
                (s[i] == ']' && lastItem != '[') ||
                (s[i] == '}' && lastItem != '{')
            ) {
                return 'NO'
            }
        }
    }

    if (openBrackets.length > 0) {
        return 'NO'
    }

    return 'YES'
}

console.log(isBalanced('{{)[](}}'))
