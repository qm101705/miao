var qm101705 = {

  chunk: function (array, size) {
    var re = []
    var arr = []
    for (var i = 0; i < array.length; i++) {
        if (i % size == 0) {
            re.push(arr)
            var arr = []
        }
        arr.push(array[i])
    }
    re.push(arr)
    re.shift()
    return re
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
