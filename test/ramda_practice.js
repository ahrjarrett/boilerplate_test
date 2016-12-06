const R = require('ramda')

const teams = [
  {name: 'Lions', score: 5},
  {name: 'Tigers', score: 4},
  {name: 'Bears', score: 6},
  {name: 'Monkeys', score: 2}
]

// goal is to end up w/ the string 'Bears'

//const result = R.pipe(
//  R.reduce((all, item) => {
//    if( item.score === 6 ) { all += item.name }
//    return all
//  }, '')
//)

const getTopName = R.pipe(
  R.sort((a, b) => b.score - a.score),
  R.head,
  R.prop('name')
)

const result = getTopName(teams)

describe("ramda pipeline practice", () => {
  it("should return the string 'Bears'", () => {
    result.should.eql('Bears')
  })
})

