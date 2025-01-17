const task1 = require('./task1');
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Please, enter the number', input => {
    task1(input);
    readline.close();
});