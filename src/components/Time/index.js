import Taro, { useState ,useEffect} from '@tarojs/taro'

import {View,Text} from '@tarojs/components'

import './index.less'

const computTime = (time) =>{
  let s = Math.floor(time / 60) 
  let m = Math.floor(s % 60) // 分
  let mins = Math.floor(m / 10) 
  let min = m % 10
  let hour = Math.floor(s / 60) // 小时
  let hs = Math.floor(hour / 10) 
  let h = hour % 10 
  return {
    hs:hs,
    h:h,
    mins:mins,
    min:min,
  }
}
 function  Counter  (){
    let {times} = this.props
    const [ time, setTime ] = useState(times)
    const [ initTime, setInitTime ] = useState(times)
    useEffect(() => { // effect 函数，不接受也不返回任何参数
        if(initTime != times){
          setTime(times) 
          setInitTime(times) 
        }
        let interval
          if(time == 0){
            clearInterval(interval)
          }
          interval = setInterval(() => {
            setTime(t => t - 1) 
          }, 1000)
        return () => clearInterval(interval) 
      }, [time,initTime,times]) 

    let timeObj = computTime(time)
    return (
      <View className='timeView'  >
            <Text className='timeTitle'>活动倒计时</Text>
            <Text className='timeItem'>{timeObj.hs}</Text>
            <Text className='timeItem'>{timeObj.h}</Text>
            <Text className='unit'>时:</Text>
            <Text className='timeItem' >{timeObj.mins}</Text>
            <Text className='timeItem'>{timeObj.min}</Text>
            <Text className='unit'>分</Text>
      </View>
    )
}
 export default  Counter
