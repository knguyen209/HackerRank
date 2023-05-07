function gradingStudents(grades) {
    // Write your code here

    var finalGrades = [grades.length];

    for (let i = 0; i < grades.length; i++) {
        let grade = grades[i];

        if (grade < 38) {
            finalGrades[i] = grade;
        } else {
            var adjustedGrade = parseInt((grade + 5) / 5) * 5;
            finalGrades[i] = adjustedGrade - grade < 3 ? adjustedGrade : grade;
        }
    }

    return finalGrades;
}

var grades = [73, 67, 38, 33];

gradingStudents(grades);
