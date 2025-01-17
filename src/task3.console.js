const task3 = require('./task3');
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Please, enter the numbers', input => {
    const array = JSON.parse(input);
    const result = task3(array);
    console.log(result);
    readline.close();
});