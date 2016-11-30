// not using Ramda this time, only vanilla map, filter, etc.
import { problem, solution } from '../data/mockData_4.js'

Array.prototype.concatAll = function() {
  var results = []
  this.forEach(function(subArray) {
    subArray.forEach(function (item){
      results.push(item)
    })
  })
  return results
}

function movieTest() {
  const movieLists = problem

  return movieLists.map(function(movieList) {
    return movieList.videos.map(function(video) {
      return video.boxarts.filter(function(boxart){
        return boxart.width === 150
      })
      .map(function(boxart){
        return { id: video.id, title: video.title, boxart: boxart.url }
      })
    }).concatAll()
  }).concatAll()
}

describe("vanilla JS: ", () => {
  it('fails', () => {
    movieTest().sort().should.eql(solution.sort())
  })
})
