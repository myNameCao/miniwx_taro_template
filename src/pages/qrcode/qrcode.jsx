import drawQrcode from 'weapp-qrcode'
import Taro, { Component } from '@tarojs/taro'
import { View, Image,Canvas } from '@tarojs/components'
import './qrcode.less'

import logo from './logo1.png'
import backimg from './backimg.png'


export default class Qrcode extends Component {

  config = {
    navigationBarTitleText: '生成图片成功'
  }
  height =0 
  componentWillMount () { }

  componentDidMount () {
    const _this=this;
    const query = Taro.createSelectorQuery().in(this.$scope)
        query.select('.parentcode').boundingClientRect(rect =>{
            _this.height=rect.height
            _this.creatQrcode('chris')
        }).exec();
  
  }
  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }
  creatQrcode (str) {
    if(!str)return
    drawQrcode ({
      width: this.height,
      height: this.height,
      canvasId: 'myQrcode',
      text: str
    })
  }
  render () {
    return (
      <View className='qrcode'>
         <Image className='logo' src={logo} />  
         <View className='title'>中国最大的职业司机充换电平台</View>
         <View className='imgView'><Image src={backimg} /></View>
         <View className='qrcodeView'>
           <View className='parentcode'>
               <Canvas className='code' canvasId='myQrcode' />
           </View>
          </View>
         <View className='btnSave'>保存至手机相册</View>
      </View>
    )
  }
}
