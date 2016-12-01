// TO-DO: break concatAll into its own helper module
// but make sure it's loaded before concatMap?
// or will the two load asyncronously, but before any tests run...?

Array.prototype.concatAll = function() {
  var results = []
  this.forEach(function(subArray) {
    results.push.apply(results, subArray)
  })

  return results
}

Array.prototype.concatMap = function(fn) {
  return this.
    map(function(item) {
      return fn(item)
    }).
    concatAll()
}
