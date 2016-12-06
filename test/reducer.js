const votes = [
  "angular",
  "angular",
  "react",
  "react",
  "react",
  "angular",
  "ember",
  "react",
  "vanilla"
]

const initialVal = {}

const reducer = (tally, vote) => {
  if (!tally[vote]) { tally[vote] = 1 }
  else { tally[vote] = tally[vote] + 1 }

  return tally
}

const result = votes.reduce(reducer, initialVal)

describe("reducer should create array of reduced vals", () => {
  it.only("should return reduced obj", () => {
    console.log(result)
    result[0].angular.should.eql(3)
  })
})



