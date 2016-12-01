module.exports = Array.prototype.concatMap = function(fnReturnsArr) {
  return this
    .map(function(item) {
      return fnReturnsArr(item)
    })
    .concatAll()
}
