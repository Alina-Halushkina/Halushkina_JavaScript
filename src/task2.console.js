const task2 = require('./task2');
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Please, enter the name "John"', input => {
    task2(input);
    readline.close();
});