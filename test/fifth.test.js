import { problem, solution } from '../data/mockData_5.js'

Array.prototype.concatMap = function(projectionFunctionThatReturnsArray) {
  return this
    .map(function(item) {
      return projectionFunctionThatReturnsArray(item)
    })
    .concatAll()
}

// flatten :: [[Arr]] -> Arr
const flatten = (arr) => arr.reduce(function(a, b){
  return a.concat(b)
}, [])

describe("concatMap maps and concats: ", () => {
  it("2D input should be flat", () => {
    problem.concatMap(flatten).should.eql(solution)
  })
})
