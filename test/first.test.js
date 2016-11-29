const R = require('ramda')
const _ = require('lodash')
const testData = require('../data/data.json')

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
    R.identity(testData).should.eql(testData)
  })
})

describe("ramda filter", () => {
  it("should filter array to odd numbers", () => {
    const isOdd = (n) => n % 2 === 1
    R.filter(isOdd, [1,2,3,4,5,6,7]).should.eql([1,3,5,7])
  })
})

//describe("ramda mapping", () => {
//  it("should map toUpperCase to name", () => {
//  })
//})

