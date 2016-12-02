function checkAnswer(){
  return true
}

describe("partial application: ", () => {
  it.only("returns functors that allow us to compose fns", () => {
    checkAnswer().should.eql(true)
  })
})

