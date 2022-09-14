var qm101705 = {
  chuck: function (array, size = 1) {
    var result = []
    for (var i = 0; i < array.length;) {
      var res = []
      for (var j = 0; j < size; j++) {
        res.push(arry[i])
        i++
        if (i == size) {
          break
        }
      }
    }
    result.push(res)
    return result
  }
}
