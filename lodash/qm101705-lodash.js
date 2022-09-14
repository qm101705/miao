var qm101705 = {
  chuck: function (array, size = 1) {
    var result = []
    for (var i = 0; i < array.length;) {
      var res = []
      for (var j = 0; j < size; j++) {
        res.push(array[i])
        i++
        if (i == array.length) {
          break
        }
      }
    }
    result.push(res)
    return result
  },

  compact: function (array) {
    var result = []
    for (var i = 0; i < array.length; i++) {
      if (arry[i]) {
        result.push(array[i])
      }
    }
    return result
  },
}
