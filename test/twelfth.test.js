// FUN TO SOLVE!

import { problem, solution } from '../data/mockData_12'

function checkAnswer() {
  let movieLists = problem

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

describe("compose zip, filter & reduce", () => {
  it("filters one array and reduces another during zip up", () => {
    checkAnswer().should.eql(solution)
  })
})

