const sequence = require('./sequence');
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Please, enter the sequence', input => {
    const result = sequence(input);
    if (result) {
        console.log('The sequence is correct');
    } else {
        console.log('The sequence is incorrect');
    }
    readline.close();
});