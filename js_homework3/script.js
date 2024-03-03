function drawTriangle(height, symbol) {
    for (let i = 1; i <= height; i++) {
        let row = '';
        for (let j = 1; j <= i; j++) {
            row += symbol;
        }
        console.log(row);
    }
}
drawTriangle(5, '*');

function drawTriangle(height, symbol) {
    let triangle = '';
    let stars = '';
    for (let i = 1; i <= height; i++) {
        stars += symbol;
        triangle += stars + '\n';
    }
    console.log(triangle);
}
drawTriangle(5, '*');


let sum = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 3 !== 0) {
        sum += i;
    }
}
console.log(sum);


function pow(x, y) {
    let result = 1;
    for (let i = 0; i < y; i++) {
        result *= x;
    }
    return result;
}
console.log(pow(2, 3));
