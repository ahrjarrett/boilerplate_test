import { lists, videos, boxarts, bookmarks, solution } from '../data/mockData_14'

function checkAnswer() {

  return lists.map(function(list){
    return {
      name: list.name,
      videos:
        videos.
          filter(function(video){
            return video.listId === list.id
          }).
          concatMap(function(video){
            return Array.zip(
              bookmarks.filter(function(bookmark){
                return bookmark.videoId === video.id
              }),
              boxarts.filter(function(boxart){
                return boxart.videoId === video.id
              }).
              reduce(function(acc, curr){
                return acc.width * acc.height < curr.width * curr.height
                  ? acc : curr
              }),
              function(bookmark, boxart){
                return {
                  id: video.id,
                  title: video.title,
                  time: bookmark.time,
                  boxart: boxart.url
                }
              })
        })
    }
  })

}

describe("test #14: ", () => {
  it("Converting from Arrays to Deeper Trees", () => {
    checkAnswer().should.eql(solution)
  })
})

