import Taro from '@tarojs/taro'

import {View,Image} from '@tarojs/components'
import btn from '@img/btn.png'
import './index.less'

 function  Pop  (){
    let {show,closeFun} = this.props
    function close (){
      closeFun()
       console.log(1)
    }
    return (
      show ? <View className='pop' >
           <View className='content'>
             <View className='msg'>助力成功</View>
             <View className='msg1'>请耐心等待开奖!</View>
             <View className='btn' onClick={close}><Image src={btn} /></View>
           </View>
      </View> : ''
    )
}
 export default  Pop
