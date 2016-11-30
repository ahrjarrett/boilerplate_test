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

    const getLabel = R.pipe(R.splitAt(GROUP_LEN + 1), R.last)

    const addLabel = R.chain(R.compose(
      R.ifElse(inGroup, getLabel, R.identity),
      R.head), R.append
    )

    const massageData = R.pipe(
      R.toPairs,
      R.map(addLabel)
    )

    massageData(data).should.eql(goal)

  })
})
