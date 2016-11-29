var R = require('ramda')
var _ = require('lodash')
var testData = require('./data.json')

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



