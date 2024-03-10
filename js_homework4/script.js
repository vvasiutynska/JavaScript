function myIsNan(value){
    return (typeof value !== 'number' || value !== value);
}  
console.log(myIsNan(125));




function pad(str, symbol, count, isStart) {
    if (typeof str !== 'string' || typeof symbol !== 'string' || typeof count !== 'number' || typeof isStart !== 'boolean') {
        console.log('Некоректні вхідні дані.');
    }

    let result = str;
    const symbolsToAdd = Math.max(count - str.length, 0);

    if (isStart) {
        result = symbol.repeat(symbolsToAdd) + str;
    } else {
        result += symbol.repeat(symbolsToAdd);
    }

    return result;
}

console.log(pad('qwerty', '+', 10, true)); 
console.log(pad('qwerty', '+', 10, false));




function checkProbabilityTheory(count) {
    let evenCount = 0;
    let oddCount = 0;

    for (let i = 0; i < count; i++) {
        const randomNum = Math.floor(Math.random() * (1000 - 100 + 1) + 100);
        if (randomNum % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    }

    const percentEven = (evenCount / count) * 100;
    const percentOdd = 100 - percentEven;

    console.log("Кількість згенерованих чисел:", count);
    console.log("Парних чисел:", evenCount);
    console.log("Непарних чисел:", oddCount);
    console.log("Відсоток парних до не парних:", percentEven.toFixed(2) + "% : " + percentOdd.toFixed(2) + "%");
}

checkProbabilityTheory(1000);



