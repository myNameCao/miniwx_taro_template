
/*
   safety certificate  
   安全认证  
   地址:"http://wiki.czb365.com/pages/viewpage.action?pageId=1147132"
*/
 

import MD5 from 'md5'

import api from '../config/index'

const czb_api=api['czb_api']

const BASE=czb_api[czb_api.ENV]

const generate =  res => {
        res.app_key = BASE.appKey
        res.timestamp = new Date().getTime()
        res.sign = signGenerate(res)
        return res
}
const signGenerate = res => {
    var objs = paramSort(res)
    var strs = ''
    for (let i = 0; i < objs.length; i++) {
      strs += objs[i][0] + '' + ((objs[i][1] === null || objs[i][1] === undefined) ? '' : objs[i][1])
    }
    strs = MD5(BASE.appSecret + strs + BASE.appSecret).toLowerCase()
    return strs
}
const paramSort = res => {
    var str = []
    // 将对象转成数组
    for (var i in res) {
      str.push([i, res[i]])
    }
    // 对数组进行排序
    _sort(str, function (a, b) {
      return a[0] > b[0]
    })
    return str
}
const _sort = (array, fn) => {
    for (var i = 0; i < array.length - 1; i++) {
      var isSorted = true
      for (var j = 0; j < array.length - 1 - i; j++) {
        if (fn(array[j], array[j + 1]) > 0) {
          var temp = array[j]
          array[j] = array[j + 1]
          array[j + 1] = temp
          isSorted = false
        }
      }
      if (isSorted) {
        return false
      }
    }
}
export default generate