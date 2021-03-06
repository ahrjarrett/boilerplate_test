import R from 'ramda'
import { problem, solution } from '../data/mockData_2.js'

describe("T", () => {
  it("always returns true", () => {
    true.should.eql(true)
  })
})

describe("Exploring Ramda", () => {
  it("flattens and zips and object", () => {

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

    const answer = R.pipe(
      R.toPairs,
      R.map(convert),
      R.groupBy(groupName)
    )

    answer(problem).should.eql(solution)

  })
})
