import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './loading.less'

export default class Loading extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='loading'>
        <Text>Hello world!</Text>
      </View>
    )
  }
}
