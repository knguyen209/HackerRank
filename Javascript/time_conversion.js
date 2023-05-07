function timeConversion(s) {
    // Write your code here
    s = "07:05:45PM";

    let indication = s.slice(-2);
    let timeStr = s.slice(0, s.length - 2);
    let timeArr = timeStr.split(":").map((n) => parseInt(n));
    let answer = "";

    if (indication === "AM" && timeArr[0] === 12) {
        timeArr[0] = 0;
    }

    if (indication === "PM" && timeArr[0] < 12) {
        timeArr[0] += 12;
    }

    answer += timeArr[0].toString().padStart(2, "0");
    answer += ":" + timeArr[1].toString().padStart(2, "0");
    answer += ":" + timeArr[2].toString().padStart(2, "0");

    console.log(answer);
}

timeConversion("07:05:45PM");

timeConversion("07:05:45AM");
