// https://www.hackerrank.com/challenges/angry-professor/problem?isFullScreen=true

function angryProfessor(k: number, a: number[]): string {
    let onTimeStudents = a.filter((i) => i <= 0).length
    return onTimeStudents < k ? 'YES' : 'NO'
}
