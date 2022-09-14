var qm101705 = {
  chuck: function (array, size = 1) {
    var result = []
    var res = []
    var r = []
    for (var i = 0; i < array.length; i++) {
      if (i < size) {
        res.push(array[i])
      } else {
        r.push(array[i])
      }
    }
    result.push(res)
    result.push(r)
    return result
  }
}
