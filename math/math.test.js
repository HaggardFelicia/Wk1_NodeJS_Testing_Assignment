const { sum, subtract, multiply,divide,sqrt,max } = require('./math');

describe('Testing the math module', () => {

    // adding two numbers
    test('Should add two numbers', () => {
        expect(sum(1, 2)).toBe(3);
    });

    // subtracting two numbers
    test('Should subtract two numbers', () => {
        expect(subtract(2, 1)).toBe(1);
    });

    // multiplying two numbers
    test('Should multiply two numbers', () => {
        expect(multiply(2, 3)).toBe(6);
    });

    // dividing two numbers
    test('Should divide two numbers', () => {
        expect(divide(6, 3)).toBe(2);
    });

    // finding the square of a number
    test('Should find the square root of a number', () => {
        expect(sqrt(4)).toBe(2);
    });

    // finding the maximum of two numbers
    test('Should find the maximum of two numbers', () => {
        expect(max(2, 3)).toBe(3);
    });
});