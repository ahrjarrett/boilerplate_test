import { problem, solution } from '../data/mockData_9'

// there has to be a more elegant way than hardcoding `obj[video.id] = video.title`
// i'm thinking something with Object.keys?
function reducify() {
  const videos = problem

  return videos
    .reduce(function(accumulatedMap, video) {
      let obj = {}
      obj[video.id] = video.title
      return Object.assign(accumulatedMap, obj)
    }, {})
}

describe('9: using reduce to change data type(s)', () => {
  it('should create a new array of videos', () => {
    //  console.log(problem)
    //  console.log(solution)
    reducify().should.eql(solution)
  })
})

