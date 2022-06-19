const duplicate = require('./duplicate')

test('should return object with keys and value as repeating number', () => { 

    const array = ["a", "a", "b", "b", "b", "c"];
    const obj = { a: 2, b: 3, c: 1 };

    expect(duplicate(array)).toEqual(obj);

 })