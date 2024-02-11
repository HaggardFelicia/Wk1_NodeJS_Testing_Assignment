const { uppercase,lowercase } = require('./string');

describe('Testing the string module', () => {

    test('Should uppercase a string input', () => {
        expect(uppercase('hello')).toBe('HELLO');
    });

    test("Should lowercase a string input", () => {
        expect(lowercase('HELLO')).toBe('hello')
    });

});