import R from 'ramda'
import { data, goal } from '../data/mockData_3.js'

const fn = R.identity

describe("third test", () => {
  it.only("", () => {
    fn(data).should.eql(goal)
  })
})

