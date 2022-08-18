const {shuffleArray} = require('./utils')

let testArr = [2,4,6,8] 


describe('shuffleArray should', () => {
    // CODE HERE
    describe('shuffleArray should', () => {
        test('should return argument length match', ()=> {
           let results = shuffleArray(testArr) 
           expect(testArr.length).toEqual(results.length)
        })
})
})
