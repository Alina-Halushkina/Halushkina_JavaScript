const sequence = require('./sequence');


describe('Bracket sequence', () => {
    test('Check if the sequence is incorrect', () => {
        const input = '[((())()(())]]';

        const result = sequence(input);

        expect(result).toBeFalsy();
    });

    test('Check if the sequence is correct', () => {
        const input = '[((())()(()))]';

        const result = sequence(input);

        expect(result).toBeTruthy();
    });
});