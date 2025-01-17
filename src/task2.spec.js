const task2 = require('./task2');


describe('Task 2', () => {

    test('If the entered name matches “John”, then output “Hello, John”', () => {
        console.log = jest.fn();

        const input = "John";

        task2(input);

        expect(console.log).toHaveBeenCalledWith('Hello, John');
    });


    const negativeTestDataset = ["Ivan", "Paul", "Jacob", "Yan"];


    test.each(negativeTestDataset)('Negative test', (input) => {
        console.log = jest.fn();

        task2(input);

        expect(console.log).toHaveBeenCalledWith('There is no such name');
    });
});