import { problem } from '../data/mockData_7'

function naiveReducer(){
  let boxarts = problem,
      maxSize = -1,
      currentSize,
      largestBoxart

  // write a forEach function that returns which boxart has the largest dimensions
  boxarts.forEach(function(boxart){
    currentSize = boxart.width * boxart.height
    if (currentSize > maxSize) {
      largestBoxart = boxart
      maxSize = currentSize
    }
  })

  return largestBoxart
}

describe("15: naive reduce fn", () => {
  it("should return 1 largest value", () => {
    naiveReducer().should.eql(problem[3])
  })
})
