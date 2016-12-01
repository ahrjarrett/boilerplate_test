import R from 'ramda'
import { problem, solution } from '../data/mockData_3.js'

const answer = R.pipe(
  R.values,
  R.flatten,
  R.map((p) => ({ [p.value]: p.checked })),
  R.mergeAll
)

describe("Exploring Ramda pt 2", () => {
  it("returns a similar solution that is less verbose", () => {
    answer(problem).should.eql(solution)
  })
})

