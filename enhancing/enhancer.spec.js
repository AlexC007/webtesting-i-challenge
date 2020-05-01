const enhancer = require('./enhancer.js');
const {succeed, fail, repair} = require('./enhancer.js');

const item = {
    name: "Player1",
    durability: 50,
    enhancement:15,
}

const item2 = {
    name: "Player2",
    durability: 50,
    enhancement:20,
}
const item3 ={
    name: "Player3",
    durability: 25,
    enhancement: 14,
}

describe('repair', () => {
    it('restore durability to 100', () => {
        expect(repair(item)).toEqual({...item, durability: 100});
    })
})

describe ('succeed', () =>{
    it('+1 to enhance if less than 20', () =>{
        expect(succeed(item)).toEqual({...item, enhancement:16})
    })
})

describe ('succeed', () =>{
    it('remain the same, as test item already has max enhancement of 20', () =>{
        expect(succeed(item2)).toEqual({...item2, enhancement:20})
    })
})

describe ('fail', () =>{
    it("If the item's enhancement is less than 15, the durability of the item is decreased by 5.", () =>{
        expect(fail(item3)).toEqual({...item3, durability:20})
    })
})

describe ('fail', () =>{
    it("If the item's enhancement is 15 or more, the durability of the item is decreased by 10.", () =>{
        expect(fail(item)).toEqual({...item, durability:40})
    })
})
describe ('fail', () =>{
    it("If the item's enhancement level is greater than 16, the enhancement level decreases by 1", () =>{
        expect(fail(item2)).toEqual({...item2,durability:40, enhancement:19})
    })
})

// test away!
