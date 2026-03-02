function age() {
    let d1 = parseInt(document.getElementById("date").value);
    let m1 = parseInt(document.getElementById("month").value);
    let y1 = parseInt(document.getElementById("year").value);

    let today = new Date();
    let d2 = today.getDate();
    let m2 = today.getMonth() + 1;
    let y2 = today.getFullYear();

    // Input Validation
    if (isNaN(d1) || isNaN(m1) || isNaN(y1)) {
        document.getElementById("age").innerHTML = "⚠ Please enter valid numbers.";
        return;
    }

    if (d1 < 1 || d1 > 31 || m1 < 1 || m1 > 12 || y1 > y2) {
        document.getElementById("age").innerHTML = "⚠ Please enter a valid date.";
        return;
    }

    // Leap Year Check
    function isLeapYear(year) {
        return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    }

    let monthDays = [31, (isLeapYear(y2) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    // Date Adjustment
    if (d1 > d2) {
        d2 += monthDays[m2 - 2];
        m2 -= 1;
    }

    if (m1 > m2) {
        m2 += 12;
        y2 -= 1;
    }

    let d = d2 - d1;
    let m = m2 - m1;
    let y = y2 - y1;

    document.getElementById("age").innerHTML =
        `🎉 Your Age is ${y} Years ${m} Months ${d} Days`;
}
