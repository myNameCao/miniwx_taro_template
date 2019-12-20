import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import './qrcode.less'

import logo from './logo1.png'
import backimg from './backimg.png'

export default class Qrcode extends Component {

  config = {
    navigationBarTitleText: '生成图片成功'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='qrcode'>
         <Image className='logo' src={logo} />  
         <View className='title'>中国最大的职业司机充换电平台</View>
         <View className='imgView'><Image src={backimg} /></View>
         <View className='qrcodeView'> </View>
         <View className='btnSave'>保存至手机相册</View>
      </View>
    )
  }
}
