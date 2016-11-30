import { problem, solution } from '../data/mockData_5.js'

Array.prototype.concatMap = function(projectionFunctionThatReturnsArray) {
  return this
    .map(function(item) {
      return projectionFunctionThatReturnsArray(item)
    })
    .concatAll()
}

/* BUG: this test fails because we redefined reduce in eight.test.js
 * so that it returns an array, instead of the value (which totally
 * defeats the purpose of the flatten function)
 */

// flatten :: [[Arr]] -> Arr
const flatten = (arr) => arr.reduce(function(a, b){
  return a.concat(b)
}, [])

describe("concatMap maps and concats: ", () => {
  it("2D input should be flat", () => {
    problem.concatMap(flatten).should.eql(solution)
  })
})
