const task3 = require('./task3');


describe('Task 3', () => {
    test('There is a numeric array at the input, it is necessary to output array elements that are multiples of 3', () => {
        const inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        const expectedOutput = [3, 6, 9];

        const result = task3(inputArray);

        expect(result).toStrictEqual(expectedOutput);
    });
});