import R from 'ramda'

//http://users.csc.calpoly.edu/~jdalbey/103/Projects/ProgrammingPractice.html
//One classic method for composing secret messages is called a square code.
//The spaces are removed from the english text and the characters are written into a square (or rectangle).
//For example, the sentence "If man was meant to stay on the ground, God would have given us roots."
//is 54 characters long, so it is written into a rectangle with 7 rows and 8 columnSize.

//ifmanwas
//meanttos
//tayonthe
//groundgo
//dwouldha
//vegivenu
//sroots

//The coded message is obtained by reading down the columns going left to right.
//For example, the message above is coded as:

//imtgdvs fearwer mayoogo anouuio ntnnlvt wttddes aohghn sseoau
describe("square code challenge", () => {
  let inputs = [
    'If man was meant to stay on the ground, God would have given us roots.',
    'Have a nice day!',
    'Feed the dog.',
    'CHILL OUT!!!'
  ]

  let outputs = [
    'imtgdvs fearwer mayoogo anouuio ntnnlvt wttddes aohghn sseoau',
    'hae and via ecy',
    'fto ehg ee dd',
    'cl ho iu lt'
  ]

  let cleanInput = R.pipe(
    R.toLower,
    R.replace(/[^a-z]/g, '')
  )

  it("clean input", () => {
    cleanInput('HELLO!!  ...,,').should.eql('hello')
  })

  //Hint:
  //rows = floor of square root of length
  //columns = ceiling of length / rows
  let determineNumberOfColumns = (input) => {
    let length = input.length
    let columnsFor = R.pipe(
      Math.sqrt,
      Math.floor,
      R.divide(length),
      Math.ceil
    )
    return columnsFor(length)
  }

  it("determine number of columns", () => {
    let checkColumns = R.map(R.pipe(cleanInput, determineNumberOfColumns))
    checkColumns(inputs).should.eql([8, 4, 4, 4])
  })

  // originally turnIntoSquare was R.always(R.identity), because R.always returns a function that returns the given value
  // so, in this case, passing 4 to turnIntoSquare does nothing bc calling R.always(R.identity)() does not take any params
  let turnIntoSquare = (columns) => R.splitEvery(columns)

  it("turn input into square", () => {
    let input = 'haveaniceday'
    turnIntoSquare(4)(input).should.eql([
      'have',
      'anic',
      'eday'
    ])
  })

  // as above, fillSquare was initialized to R.always(R.identity)
  // this one gets complicated; probably worth renaming some of the piped functions within fillSpaces()
  let fillSquare = (columns) => R.map(
    R.ifElse(
      R.pipe(R.length, R.equals(columns)),
      R.identity,
      (row) => {
        let fillSpaces = R.pipe(
          R.length,
          R.subtract(columns),
          R.times(R.always(' ')),
          R.join(''),
          R.concat(row)
        )
        return fillSpaces(row)
      }
    )
  )

  it("fill in spaces for any uneven rows", () => {
    let squareWithUnevenRows = [
      'feed',
      'thed',
      'og'
    ]
    fillSquare(4)(squareWithUnevenRows).should.eql([
      'feed',
      'thed',
      'og  '
    ])
  })

  it("transpose a square", () => {
    let square = [
      'have',
      'anic',
      'eday'
    ]

    transposeSquare(square).should.eql([
      'hae',
      'and',
      'via',
      'ecy'
    ])
  })


  it("tranpose an uneven rows square", () => {
    let square = [
      'feed',
      'thed',
      'og'
    ]

    R.pipe(fillSquare(4), transposeSquare)(square).should.eql([
      'fto',
      'ehg',
      'ee',
      'dd'
    ])
  })

  let encode = R.identity

  it("encode inputs", () => {
    R.map(encode, inputs).should.eql(outputs)
  })

  let decode = R.identity

  it("decode outputs", () => {
    R.map(decode, outputs).should.eql([
      'ifmanwas meanttos tayonthe groundgo dwouldha vegivenu sroots',
      'have anic eday',
      'feed thed og',
      'chil lout'
    ])
  })
})
