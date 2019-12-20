/* eslint-disable react/sort-comp */
import Taro, { Component } from '@tarojs/taro'
import { View, Image ,  Input ,Button} from '@tarojs/components'
import './index.less'
import  logo from './logo.png'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '地推身份登记',
    isGeting:false,
    secend:60
  }

  componentWillMount () { }

  componentDidMount () { 
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  nextClick () {
     Taro.navigateTo({
       url:'/pages/qrcode/qrcode'
     })
  }
  render () {
    return (
      <View className='index'>
         <View className='logo'><Image src={logo} /></View>
         <View className='telphone line'><Input type='number' placeholderClass='placeholderClass' placeholder='请输入手机号' /></View>
         <View className='code line'>
           <Input   placeholderClass='placeholderClass' type='number' placeholder='请输入验证码' />
           <View  className='getcode'>{this.state.isGeting?`${this.state.secend} s`:'获取验证码'}</View>
         </View>
         <Button className='btn' onClick={this.nextClick} >下一步</Button>
      </View>
    )
  }
}
