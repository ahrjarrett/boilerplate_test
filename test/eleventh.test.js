const left = [1,4,5], right = [1,7,5]
const addLeftToRight = (left, right) => left + right

// ramda does the looping a little differently:
// they use a while loop, & instead of pushing to result
// they do: `result[idx] = [l[idx], r[idx]]`
Array.zip = function(l, r, fn){
  let idx, result = []

  for(idx = 0; idx < Math.min(l.length, r.length); idx++) {
    result.push(fn(l[idx], r[idx]))
  }
  return result
}

describe('11: wrote a naive zip fn that:', () => {
  it.only('should zip her up', () => {
    Array.zip(left, right, addLeftToRight).should.eql([2, 11, 10])
  })
})
