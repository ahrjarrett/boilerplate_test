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
  const inputs = [
    'If man was meant to stay on the ground, God would have given us roots.',
    'Have a nice day!',
    'Feed the dog.',
    'CHILL OUT!!!'
  ]

  const outputs = [
    'imtgdvs fearwer mayoogo anouuio ntnnlvt wttddes aohghn sseoau',
    'hae and via ecy',
    'fto ehg ee dd',
    'cl ho iu lt'
  ]

  const cleanInput = R.pipe(
    R.toLower,
    R.replace(/[^a-z]/g, '')
  )

  it("clean input", () => {
    cleanInput('HELLO!!  ...,,').should.eql('hello')
  })

  //Hint:
  //rows = floor of square root of length
  //columns = ceiling of length / rows
  const determineNumberOfColumns = (input) => {
    const length = input.length
    const columnsFor = R.pipe(
      Math.sqrt,
      Math.floor,
      R.divide(length),
      Math.ceil
    )
    return columnsFor(length)
  }

  it("determine number of columns", () => {
    const checkColumns = R.map(R.pipe(cleanInput, determineNumberOfColumns))
    checkColumns(inputs).should.eql([8, 4, 4, 4])
  })

  // originally turnIntoSquare was R.always(R.identity), because R.always returns a function that returns the given value
  // so, in this case, passing 4 to turnIntoSquare does nothing bc calling R.always(R.identity)() does not take any params
  const turnIntoSquare = (columns) => R.splitEvery(columns)

  it("turn input into square", () => {
    const input = 'haveaniceday'
    turnIntoSquare(4)(input).should.eql([
      'have',
      'anic',
      'eday'
    ])
  })

  // as above, fillSquare was initialized to R.always(R.identity)
  // this one gets complicated; probably worth renaming some of the piped functions within fillSpaces()
  const fillSquare = (columns) => R.map(
    R.ifElse(
      R.pipe(R.length, R.equals(columns)),
      R.identity,
      (row) => {
        const fillSpaces = R.pipe(
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
    const squareWithUnevenRows = [
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


  // this one was a bitch. breaking changes in
  // R.converge from 0.17 to 0.22 meant having
  // to wrap 2nd arg in an array -_-;;
  const transposeSquare = R.converge(
    R.reduce((acc, row) => {
      const zipWithAcc = R.pipe(
        R.zip(acc),
        R.map(R.pipe(R.flatten, R.join('')))
      )
      return zipWithAcc(row)
    }), [
      R.pipe(R.head, R.map(R.of)),
      R.tail
  ])

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


  it.only("tranpose an uneven rows square", () => {
    const square = [
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

  const encode = R.identity

  it("encode inputs", () => {
    R.map(encode, inputs).should.eql(outputs)
  })

  const decode = R.identity

  it("decode outputs", () => {
    R.map(decode, outputs).should.eql([
      'ifmanwas meanttos tayonthe groundgo dwouldha vegivenu sroots',
      'have anic eday',
      'feed thed og',
      'chil lout'
    ])
  })
})
