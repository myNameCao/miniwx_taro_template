import Taro, { Component } from '@tarojs/taro'

import {View ,Text } from '@tarojs/components'

import './index.less'


export default class Loading extends Component {
    constructor () {
      super(...arguments)
      Taro.initPxTransform({ designWidth: 750 })
    }
    render () {
      const { color, size ,status } = this.props
     
      const sizeStyle = {
        width: size ? `${Taro.pxTransform(parseInt(size))}` : '',
        height: size ? `${Taro.pxTransform(parseInt(size))}` : '',
      }
      let ishow = status == 'noMore'

      let ishowConent = status == 'noMore' || status == 'loading'
     
      const contStyle = {
        height: size ? `${Taro.pxTransform(parseInt(size) + 50)}` : '',
        lineHeight: size ? `${Taro.pxTransform(parseInt(size) + 50)}` : '',
      }
      const colorStyle = {
        'border': color ? `1px solid ${color}` : '',
        'border-color': color ? `${color} transparent transparent transparent` : '',
      }
      const ringStyle = Object.assign({}, colorStyle, sizeStyle)
     return (
         <View>
            {ishowConent && <View style={contStyle}   className='loadingContent' >
                {!ishow && <View  className='at-loading' style={sizeStyle}>
                        <View className='at-loading__ring' style={ringStyle}></View>
                        <View className='at-loading__ring' style={ringStyle}></View>
                        <View className='at-loading__ring' style={ringStyle}></View>
                    </View>}
                    <Text   className='textMsg'   style={{color:color}} >{ishow ? '没有数据啦 ~' : '加载中...'}</Text>
            </View>}
          </View>
      )
    }
  }
