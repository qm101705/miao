var qm101705 = {

  chunk: function (array, size = 1) {
    var result = []
    for (var i = 0; i < array.length;) {
      var group = []
      for (var j = 0; j < size; j++) {
        group.push(array[i])
        i++
        if (i == array.length) {
          break
        }
      }
      result.push(group)
    }
    return result
  },

  compact: function (array) {
    var result = []
    for (var i = 0; i < array.length; i++) {
      if (array[i]) {
        result.push(array[i])
      }
    }
    return result
  },

  fill: function (array, value, start = 0, end = array.length) {
    for (var i = start; i < end; i++) {
      array[i] = value
    }
    return array
  },

  drop: function (array, n = 1) {
    var result = []
    for (var i = 0; i < array.length; i++) {
      if (i >= n) {
        result.push(array[i])
      }
    }
    return result
  },

  findIndex: function (array, predicate, fromIndex = 0) {
    predicate = short(predicate)
    for (var i = fromIndex; i < array.length; i++) {
      if (predicate(array[i])) {
        return i
      }
    }
    return -1
  },


}
