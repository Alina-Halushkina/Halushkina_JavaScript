const task1 = require('./task1');


describe('Task 1', () => {

    test('If the entered number is greater than 7, then print “Hello', () => {
        console.log = jest.fn();

        const input = (Math.random() + 1) * 7;

        task1(input);

        expect(console.log).toHaveBeenCalledWith('Hello');
    });

    const negativeTestDataset = [-1, 0, 1, 2, 3, 4, 5, 6, 7];

    test.each(negativeTestDataset)('Negative test', (input) => {
        console.log = jest.fn();

        task1(input);

        expect(console.log).not.toHaveBeenCalledWith('Hello');
    });
});