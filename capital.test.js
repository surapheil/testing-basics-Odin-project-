const capitalize = require('./capitalize');

test('is it capitalized',()=>{
    expect(capitalize('Hello')).toBe('Hello')
})