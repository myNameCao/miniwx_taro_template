import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import logo from './logoloding.png'
import './loading.less'

export default class Loading extends Component {

  config = {
    navigationBarTitleText: '加载页'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='loading'>
        <View className='logo'><Image src={logo} /></View>
        <View className='lds-ellipsis'>
          <View className='item'></View>
          <View className='item'></View>
          <View className='item'></View>
          <View className='item'></View>
        </View>
      </View>
    )
  }
}
