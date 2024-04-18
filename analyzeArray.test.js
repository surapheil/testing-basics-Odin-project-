const analyzeArray = require('./analyzeArray');
test('array Analyzed',()=>{
    expect(analyzeArray([1,2,3])).toMatchObject({average:2,min:1,max:3,length:3})
})

test('array Analyzed',()=>{
    expect(analyzeArray([1,5,3,4,2])).toMatchObject({average:3,min:1,max:5,length:5})
})