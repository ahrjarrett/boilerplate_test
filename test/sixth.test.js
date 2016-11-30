import { solution } from '../data/mockData_4'
import { problem } from '../data/mockData_4'

function usingConcatMap() {
  const movieLists = problem
  return movieLists.concatMap(function(movieList){
    return movieList.videos.concatMap(function(video){
      return video.boxarts.filter(function(boxart){
        return boxart.width === 150
      })
      .map(function(boxart){
        return { id: video.id, title: video.title, boxart: boxart.url }
      })
    })
  })
}

describe("6: using concatMap from 5: ", () => {
  it.only("should map and flatten data", () => {
    usingConcatMap().should.eql(solution)
  })
})
