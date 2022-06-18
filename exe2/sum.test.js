const sum = require('./sum');

test('add two numbers', ()=> {
    expect(sum(2,1)).toBe(3)
})