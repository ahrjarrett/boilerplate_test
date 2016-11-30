const R = require('ramda')
//const mockData = require('../data/mockData.js')
import { data, goal } from '../data/mockData'

describe("test test", () => {
  it("test should pass", () => {
    true.should.eql(true)
  })
})

describe("data should match goal", () => {
  it.only("sensual data massage is sensual", () => {

    const GROUP_LEN = 6
    const inGroup = str => str.indexOf('-') === GROUP_LEN

    // addLabel :: Array -> Array
    const addLabel = R.chain(R.compose(
      R.ifElse(inGroup, () => 'x', R.identity),
      R.head), R.append
    )

    const massageData = R.pipe(
      R.toPairs,
      R.map(addLabel)
    )

    massageData(data).should.eql(goal)

  })
})
