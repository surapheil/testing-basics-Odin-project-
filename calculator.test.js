const calculator = require('./calculator');

test('it adds',()=>{
    expect(calculator.add(1,2)).toBe(3)
});
test('5 minus 2 to equal 3',()=>{
    expect(calculator.sub(5,2)).toBe(3)
});
test('5 times 2 to equal 10',()=>{
    expect(calculator.mul(5,2)).toBe(10)
});
test('deviding 5 by 2 to equal 2.5',()=>{
    expect(calculator.div(5,2)).toBeCloseTo(2.5)
});

test('deviding 5 by 0 to equal undefined',()=>{
    expect(() => {
        calculator.div(5,0)
    }).toThrow(Error);
});


