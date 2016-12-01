
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
  const left = [1,4,5], right = [1,7,5]
  const addLeftToRight = (l, r) => l + r

  const keys = ['x', 'y', 'z'], values = ['examine', 'your', 'zipper']
  const zipStrings = (l, r) => {

    return

  }

  it('should zip her up', () => {
    Array.zip(left, right, addLeftToRight).should.eql([2, 11, 10])
  })

  //it('should zip up the pants', () => {
  //  Array.zip(keys, values, zipStrings).should.eql([
  //    {'x':'examine'},{'y':'your'},{'z':'zipper'}
  //  ])
  //})

})
