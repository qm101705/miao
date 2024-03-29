var qm101705 = {

  chunk: function (array, size) {
    var result = []
    for (var i = 0; i < array.length; i += size) {
        var part = array.slice(i, i + size)
        result.push(part)
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

  findIndex: function findIndex(array, predicate, fromIndex = 0) {
    for (var i = fromIndex; i < array.length; i++) {
        if (typeof predicate == 'function') {
            if (predicate(array[i])) {
                return i
            }
        } else if (Array.isArray(predicate)) {
            if (predicate[1] === array[i][predicate[0]]) {
                return i
            }
        } else if (typeof predicate == 'string') {
            if (array[i][predicate]) {
                return i
            }
        } else if (typeof predicate == 'object') {
            var judge = 1
            for (var key in predicate) {
                if (array[i][key] != predicate[key]) {
                    judge = 0
                    break
                }
            }
            if (judge) {
                return i
            }
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
    return -1
  },
  initial: function initial(ary) {
    ary.pop()
    return ary
  },
  intersection: function intersection(...arys) {
    var result = []
    for (var i = 0; i < arys[0].length; i++) {
        var p = true
        for (var j = 1; j < arys.length; j++) {
            if (arys[j].indexOf(arys[0][i]) === -1) {
                p = false
                break
            }
        }
        if (p) {
            result.push(arys[0][i])
        }
    }
    return result
  },
  join: function join(ary, separator = ',') {
    var result = ''
    for (var i = 0; i < ary.length; i++) {
      if (i != ary.length - 1) {
        result = result + ary[i] + separator
      } else {
        result += ary[i]
      }
    }
    return result
  },
  last: function last(ary) {
    return ary[ary.length - 1]
  },
  pull: function pull(ary, ...values) {
    for (var i = 0; i < ary.length; i++) {
      if (values.includes(ary[i])) {
        ary.splice(i, 1)
        i--
      }
    }
    return ary
  },
  reverse: function(ary) {
    var j = ary.length - 1
    for (var i = 0; i <= Math.floor(ary.length / 2); i++) {
      var c = ary[i]
      ary[i] = ary[j]
      ary[j] = c
      j--
    }
    return ary
  },
  sortedIndex: function sortedIndex(array, value) {
    var count = 0
    for (var i = 0; i < array.length; i++) {
      if (array[i] < value) {
        count++
      }
    }
    return count
  },
  union: function union(...arys) {
    var map = {}
    var result = []
    for (var i = 0; i < arys.length; i++) {
      for (var j = 0; j < arys[i].length; j++) {
        var temp = arys[i][j]
        if (!(temp in map)) {
          map[temp] = 1
          result.push(temp)
        }
      }
    }
    return result
  },
  uniq: function uniq(array) {
    var result = []
    for (var i = 0; i < array.length; i++) {
      if (!(result.includes(array[i]))) {
        result.push(array[i])
      }
    }
    return result
    return [...new Set(array)]
  },
  without: function without(ary, ...values) {
    var result = []
    for (var i = 0; i < ary.length; i++) {
      if (!(values.includes(ary[i]))) {
        result.push(ary[i])
      }
    }
    return result
  },
  unionBy: function unionBy(...arys) {
    var iteratee = arys.pop()
    var result = []
    var temp = []
    for (var i = 0; i < arys.length; i++) {
      for (var j = 0; j < arys[i].length; j++) {
        if (typeof iteratee == 'function') {
          var num = iteratee(arys[i][j])
        }
        if (typeof iteratee == 'string') {
          var num = arys[i][j][iteratee]
        }
        if (temp.indexOf(num) == -1) {
          temp.push(num)
          result.push(arys[i][j])
        }
      }
    }
    return result
  },
  uniqBy: function (ary, iteratee) {
    var result = []
    var temp = []
    for (var i = 0; i < ary.length; i++) {
      if (typeof iteratee == 'function') {
        var num = iteratee(ary[i])
      }
      if (typeof iteratee == 'string') {
        var num = ary[i][iteratee]
      }
      if (temp.indexOf(num) == -1) {
        temp.push(num)
        result.push(ary[i])
      }
    }
    return result
  },
  unzip: function unzip(ary) {
    var result = []
    for (var i = 0; i < ary[0].length; i++) {
      var temp = []
      for (var j = 0; j < ary.length; j++) {
        temp.push(ary[j][i])
      }
      result.push(temp)
    }
    return result
  },
  xor: function (...arys) {
    var result = []
    var map = {}
    for (var i = 0; i < arys.length; i++) {
      for (var j = 0; j < arys[i].length; j++) {
        var char = arys[i][j]
        if (!(char in map)) {
          map[char] = 1
        } else {
          map[char]--
        }
      }
    }
    for (var str in map) {
      var r = map[str]
      if (r == 1) {
        result.push(Number(str))
      }
    }
    return result
  },
  zip: function (...arys) {
    var result = this.unzip(arys)
    return result
  },
  countBy: function countBy(...collection) {
    var iteratee = collection.pop()
    var map = {}
    for (var i = 0; i < collection.length; i++) {
      for (var j = 0; j < collection[i].length; j++) {
        if (typeof iteratee == 'function') {
          var temp = iteratee(collection[i][j])
        }
        if (typeof iteratee == 'string') {
          var temp = collection[i][j][iteratee]
        }
        if (!(temp in map)) {
          map[temp] = 1
        } else {
          map[temp]++
        }
      }
    }
    return map
  }
}
