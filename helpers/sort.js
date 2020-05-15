module.exports.sort = (array) => {
  return array.sort(function(a,b) {
    return b.points - a.points;
  })
}