import Taro, { useState ,useEffect} from '@tarojs/taro'

import {View} from '@tarojs/components'

import './index.less'


 function  Counter  (){
    const [ start, setStart ] = useState(false)
    const [ time, setTime ] = useState(60)
    console.log('定时器')
    function increment () {
        
        setStart(true)
    }
    useEffect(() => { // effect 函数，不接受也不返回任何参数
        let interval
        if (start) {
          interval = setInterval(() => {
            // setTime(time - 1)  //time 在 effect 闭包函数里是拿不到准确值的
            setTime(t => t - 1) // 在 setTime 的回调函数参数里可以拿到对应 state 的最新值
          }, 1000)
        }
        return () => clearInterval(interval) // clean-up 函数，当前组件被注销时调用
      }, [ start ]) // 依赖数组，当数组中变量变化时会调用 effect 函数
    return (
        
        <View onClick={increment} className={['my-class','getcode',start ? 'graycode' : '']}>{start ? `${time} s` : '获取验证码'}</View>
    )
}


Counter.externalClasses =  ['my-class']
 

 export default  Counter
