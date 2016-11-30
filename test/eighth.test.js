const arr = [1, 2, 5, 9]

// this reduce returns an array, not a value (like in ES5)
Array.prototype.reduce = function(combiner, initialValue){
  var counter,
      accumulatedValue

  if(this.length === 0) { return this }
  else {
    if(arguments.length === 1) { counter = 1, accumulatedValue = this[0] }
    else if(arguments.length >= 2) {
      counter = 0, accumulatedValue = initialValue
    } else { throw 'Bad arity' }
  }

  while(counter < this.length) {
    accumulatedValue = combiner(accumulatedValue, this[counter])
    counter++
  }

  return [accumulatedValue]
}

describe("8: test reduce fn", () => {
  it("should return the array's highest value", () => {
    arr.reduce(function(a, b){
      return a > b ? a : b
    }).should.eql([9])
  })
})
