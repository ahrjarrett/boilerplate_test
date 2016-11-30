const R = require('ramda')
//const mockData = require('../data/mockData.js')
import { data, goal } from '../data/mockData'

describe("test test", () => {
  it("test should pass", () => {
    true.should.eql(true)
  })
})

describe("data should match goal", () => {
  it("sensual data massage is sensual", () => {

    const GROUP_LEN = 6
    const KEYS = ['value', 'checked', 'label']
    const inGroup = (str) => str.indexOf('-') === GROUP_LEN
    const getLabel = R.pipe(R.splitAt(GROUP_LEN + 1), R.last)
    const addLabel = R.chain(R.compose(
      R.ifElse(inGroup, getLabel, R.identity),
      R.head), R.append
    )
    const convert = R.pipe(addLabel, R.zipObj(KEYS))
    const groupName = R.ifElse(R.pipe(R.prop('value'), inGroup),
      R.pipe(R.prop('value'), R.splitAt(GROUP_LEN), R.head),
      () => 'general'
    )

    const massageData = R.pipe(
      R.toPairs,
      R.map(convert),
      R.groupBy(groupName),
      R.tap(console.log)
    )

    massageData(data).should.eql(goal)

  })
})
