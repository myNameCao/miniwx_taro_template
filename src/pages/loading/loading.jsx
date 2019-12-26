import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import logo from '@img/logo.png'
import './loading.less'

import  {login} from '../../utils/ajax'

export default class Loading extends Component {

  config = {
    navigationBarTitleText: 'loading'
  }
  state={
    
  }
  
  componentWillMount () { 
     login({})
  }

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
