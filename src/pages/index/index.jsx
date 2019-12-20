/* eslint-disable react/sort-comp */
import Taro, { Component } from '@tarojs/taro'
import { View, Image ,  Input ,Button} from '@tarojs/components'
import './index.less'
import  logo from './logo.png'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '地推身份登记'
  }

  componentWillMount () { }

  componentDidMount () { 
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }


  render () {
    return (
      <View className='index'>
         <View className='logo'><Image src={logo} /></View>
         <View className='telphone line'><Input type='text' placeholder='q' /></View>
         <View className='code line'><Input type='text' /></View>
         <Button className='btn' >下一步</Button>
      </View>
    )
  }
}
