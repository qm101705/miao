var qm101705 = {

  chunk: function (array, size) {
    var result = []
    var arr = []
    for (var i = 0; i < array.length; i++) {
        if (i % size == 0) {
          result.push(arr)
            var arr = []
        }
        arr.push(array[i])
    }
    result.push(arr)
    result.shift()
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
    for (var i = fromIndex; i < array.length; i++) {
      if (predicate(array[i])) {
        return i
      }
    }
    return -1
  },

  flatten: function flatten(ary) {
    return ary.reduce((result, item) => {
      return result.concat(item)
    },[])
  },

  flattenDeep: function flattenDeep(ary) {
    return ary.reduce((result, item) => {
      if (Array.isArray(item)) {
        return result.concat(flattenDeep(item))
      }
      return result.concat(item)
    },[])
    // var res = []
    // for (var i = 0; i < ary.length; i++) {
    //   if (Array.isArray(ary[i])) {
    //     res.push(...flattenDeep(ary[i]))
    //   } else {
    //     res.push(ary[i])
    //   }
    // }
    // return res
  },
  flattenDepth: function flattenDepth(ary, depth = 1) {
    if (depth == 0) {
      return ary.slice()
    }
    var res = []
    for (var i = 0; i < ary.length; i++) {
      if (Array.isArray(ary[i])) {
        res.push(...flattenDepth(ary[i], depth - 1))
      } else {
        res.push(ary[i])
      }
    }
    return res
  },

  isNaN: function isNaN(value) {
    if (value) {
      return false
    }
    return true
  },

  fromPairs: function fromPairs(pairs) {
    var map = {}
    for (var i = 0; i < pairs.length; i++) {
      map[pairs[i][0]] = pairs[i][1]
    }
    return map
  },

  head: function head(ary) {
    return ary[0]
  },

  indexOf: function indexOf(ary, value, fromIndex = 0) {
    for (var i = fromIndex; i < ary.length; i++) {
      if (ary[i] == value) {
        return i
      }
    }
  },

  lastIndexOf: function lastIndexOf(ary, value, fromIndex = ary.length - 1) {
    for (var i = fromIndex; i >= 0; i--) {
      if (ary[i] == value) {
        return i
      }
    }
  }
}
