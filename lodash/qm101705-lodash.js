var qm101705 = {
  chuck: function (array, size = 1) {
    var result = []
    var res = []
    for (var i = 0; i < array.length; i++) {
      if (i < size) {
        res.push(array[i])
      }
    }
    result.push(res)
    return result
  }
}
