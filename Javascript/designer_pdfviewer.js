// https://www.hackerrank.com/challenges/designer-pdf-viewer/problem

function designerPdfViewer(h, word) {
    let max = 1

    for (let i = 0; i < word.length; i++) {
        let height = h[word.charCodeAt(i) - 97]
        max = Math.max(max, height)
    }

    return word.length * max
}
