import Taro  from '@tarojs/taro'

import {View,Text} from '@tarojs/components'

import './index.less'


 function  Title  (){
    let {status,role} = this.props
    let el = null
    if (status == 0) {
      el = <View className='title'>
             <View>chris 进行中</View>
          </View>
    }else if(status == 1){
      el = <View className='title'>
              <Text className='successText titmsg'>{role == 3 ? '好友助力已结束' : '活动助力成功'}</Text> 
          </View>
    }else if(status == 2){
       el = (<View className='title'>
                    <Text className='failText titmsg'>活动助力失败</Text>
             </View>)
    } else {
     el =  ''
    }
    return el
}
 export default  Title
