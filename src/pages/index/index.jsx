
import Taro, { Component } from '@tarojs/taro'
import { View,Button } from '@tarojs/components'

import './index.less'

export default class Qrcode extends Component {

  config = {
    navigationBarTitleText: '首页'
  }
  componentWillMount () { }

  componentDidMount () {
    wx.hideShareMenu()//  只能点击页面元素分享
    
  }
  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }
  render () {
    return (
      <View className='index'>
         <View className='head'></View>
         <Button open-type='share' className='shard'>分享</Button>
      </View>
    )
  }
}
