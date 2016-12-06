const R = require('ramda')

const person = {
  firstName: 'Bilbo',
  lastName: 'Baggins'
}

//const fLens = R.lens(R.prop('firstName'), R.assoc('firstName'))
const fLens = R.lensProp('firstName')

const result = R.view(fLens, person)
const resultUpper = R.over(fLens, R.toUpper, person)

describe("Ramda lens practice", () => {
  it("fLens sets and gets prop value", () => {
    result.should.eql('Bilbo')
  })

  it("returns a new obj and sets fname toUpper", () => {
    person.should.eql({ firstName: 'Bilbo', lastName: 'Baggins' })
    resultUpper.should.eql({ firstName: 'BILBO', lastName: 'Baggins' })
  })
})

