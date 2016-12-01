/*
 * FUN TO SOLVE!
 * Unfortunately, for some reason mocha won't let me pass:
 * `TypeError: Cannot read property 'concatMap' of undefined`
 */

import { problem, solution } from '../data/mockData_12'

Array.prototype.concatMap = function(projectionFunctionThatReturnsArray) {
  return this
    .map(function(item) {
      return projectionFunctionThatReturnsArray(item)
    })
    .concatAll()
}

function checkAnswer() {
  let movieLists = solution

  return movieLists.concatMap(function(movieList) {
    return movieList.videos.concatMap(function(video) {
      return Array.zip(
        video.boxarts.reduce(function(acc, curr){
          return acc.height * acc.width < curr.height * curr.width ? acc : curr
        })
        , video.interestingMoments.filter(function(interestingMoment){
          return interestingMoment.type === 'Middle'
        })
        , function(boxart, interestingMoment){
          return { id: video.id,
                   title: video.title,
                   time: interestingMoment.time,
                   url: boxart.url }
        }
      )
    })
  })
}

describe("#12 is difficult", () => {
  it.only("should be zipped, reduced, etc.", () => {
    checkAnswer().should.eql(solution)
  })
})


