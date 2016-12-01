import { lists, videos, solution } from '../data/mockData_13'

function checkAnswer() {
  return lists.map(function(list){
    return {
      name: list.name,
      videos: videos.filter(function(video){
        return video.listId === list.id
      }).
      map(function(video){
        return { id: video.id, title: video.title }
      })
    }
  })
}

describe("test #13: ", () => {
  it("uses map & filter to join 2 arrays w/ a key", () => {
    checkAnswer().should.eql(solution)
  })
})


