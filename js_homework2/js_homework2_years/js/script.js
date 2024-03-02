var year = prompt("Введіть кількість років:");

if (!isNaN(year) && year > 0 && year <= 100) {

    if (year % 10 === 1 && year != 11) {
        console.log(year + " рік");
    } else if (year % 10 >= 2 && year % 10 <= 4 && (year < 12 || year > 14)) {
        console.log(year + " роки");
    } else {
        console.log(year + " років");
    }
} else {
    console.log("Некоректне значення року.");
}
