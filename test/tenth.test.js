import { problem, solution } from '../data/mockData_10'

function makeNewList(){
  const movieLists = problem

  return movieLists
    .concatMap(function(movieList) {
      return movieList.videos.concatMap(function(video){
        return video.boxarts.reduce(function(a, c){
          return c.width * c.height < a.width * a.height ? c : a
        })
        .map(function(boxart){
          return { id: video.id, title: video.title, boxart: boxart.url }
        })
      })
    })
}

describe("10: more reduction", () => {
  it("should have id, title and smallest box", () => {
    makeNewList().should.eql(solution)
  })
})


