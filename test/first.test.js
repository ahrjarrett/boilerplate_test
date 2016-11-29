const R = require('ramda')
const _ = require('lodash')

//const dataGenerator = require('../dataGenerator')
//const generateData = dataGenerator('userModel')
//const userModel = require('userModel.json')

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
    let f = (x) => x + 1 
    let g = (x) => x * 5

    f(g(1)).should.eql(6)
    g(f(1)).should.eql(10)

    R.compose(f, g)(1).should.eql(6)
    R.compose(g, f)(1).should.eql(10)

    R.pipe(f, g)(1).should.eql(10)
    R.pipe(g, f)(1).should.eql(6)

    let isEven = (x) => x %2 === 0
    let multiplyEvens = R.pipe(
      R.filter(isEven),
      R.reduce(R.multiply, 1)
    )
    
    multiplyEvens(R.range(1, 7)).should.eql(48)


  })
})

describe("working with objects", () => {
  it("first names of isActive=true and age > 30", () => {
    


  })
})

