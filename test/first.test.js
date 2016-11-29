const R = require('ramda')
const _ = require('lodash')
const demoModel = require('../data/demo.json')

describe("fail test", () => {
  it("will fail", () => {
    true.should.eql(true)
  })
})

describe("_.isString", () => {
  it("value is a string", () => {
    _.isString('string').should.eql(true)
  })
})

describe("ramda identity", () => {
  it("identity should return true", () => {
    R.identity(demoModel).should.eql(demoModel)
  })
})

describe("ramda filter", () => {
  it("should filter array to odd numbers", () => {
    const isOdd = (n) => n % 2 === 1
    R.filter(isOdd, [1,2,3,4,5,6,7]).should.eql([1,3,5,7])
  })
})

describe("testing R.curry", () => {
  it("addThree should allow currying", () => {
    const addThree = R.curry((a, b, c) => a + b + c)
    addThree(1)(2, 3).should.eql(6)
    addThree(2)(3)(4).should.eql(9)
  })

  it("func pipelines", () => {
    const f = (x) => x + 1 
    const g = (x) => x * 5

    f(g(1)).should.eql(6)
    g(f(1)).should.eql(10)

    R.compose(f, g)(1).should.eql(6)
    R.compose(g, f)(1).should.eql(10)

    R.pipe(f, g)(1).should.eql(10)
    R.pipe(g, f)(1).should.eql(6)

    const isEven = (x) => x %2 === 0
    const multiplyEvens = R.pipe(
      R.filter(isEven),
      R.reduce(R.multiply, 1)
    )

    multiplyEvens(R.range(1, 7)).should.eql(48)
  })
})

describe("working with objects", () => {
  const isActive = R.propEq('isActive', true)
  const overThirty = R.pipe(
    R.prop('age'),
    (age) => age > 30
  )

  const activeOverThirty = R.pipe(
    R.filter(R.both(isActive, overThirty)),
    R.map(R.path(['name', 'first']))
  )

  it("first names of isActive=true and age > 30", () => {
    activeOverThirty(demoModel).should.eql(['Patterson'])
  })

  let excludedTags = ['proident']

  let isExcludedTag = (tag) => R.any(R.equals(tag), excludedTags)

  let filterExcludedTags = R.reject(
    R.pipe(
      R.prop('tags'),
      //R.tap(console.log),
      R.any(isExcludedTag)
    )
  )

  it('rejects those with excluded tag', () => {
    filterExcludedTags(demoModel).length.should.eql(2) 
  })

  let makeEmailHref = R.pipe(
    R.map(R.prop('email')),
    R.join(';'),
    R.concat('mailto:')
  )

  it('sends an email to everybody', () => {
    let expectedResult = 'mailto:marcie.rollins@isosure.me;janie.donaldson@interloo.biz;rosanna.gonzales@turnabout.co.uk;patterson.compton@franscene.ca;deirdre.parrish@mantrix.biz'

    makeEmailHref(demoModel).should.eql(expectedResult)
  })

  // R.lift: basically, everything passed in each array becomes a possible value for a (and then b, and then c)
  let allPossibleSums = R.lift((a, b, c) => a + b + c)

  it('all possible sums', () => {
    let result = allPossibleSums(
      [1, 2],
      [4, 5],
      [7, 8]
    ) 
    result.should.eql([12, 13, 13, 14, 13, 14, 14, 15])
  })
})

