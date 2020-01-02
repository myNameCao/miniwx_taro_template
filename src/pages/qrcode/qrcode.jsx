
import drawQrcode from 'weapp-qrcode'
import Taro, { Component } from '@tarojs/taro'
import { View, Canvas } from '@tarojs/components'
import './qrcode.less'

export default class Qrcode extends Component {

  config = {
    navigationBarTitleText: '生成图片成功'
  }
  height =0 
  componentWillMount () { }

  componentDidMount () {
    const _this = this;
    // const { urlStr } = this.$router.params;
    const query = Taro.createSelectorQuery().in(this.$scope)
        query.select('.qrcodeView').boundingClientRect(rect =>{
            _this.height = rect.height
        
            
        }).exec();
  
  }
  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }
  creatQrcode (str) {
    if(!str)return
    drawQrcode ({
      width:this.height - 20,
      height:this.height - 20,
      canvasId: 'myQrcode',
      x:10,
      y:10,
      text: str
    })
  }
  render () {
    return (
      <View className='qrcode'>
         <View className='qrcodeView'>
               <Canvas className='code' canvasId='myQrcode' />
          </View>
      </View>
    )
  }
}
