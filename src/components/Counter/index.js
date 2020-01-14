import Taro, { useState ,useEffect} from '@tarojs/taro'

import {View} from '@tarojs/components'

import './index.less'


 function  Counter  (){
    const {outFn} = this.props;
    const [ start, setStart ] = useState(false)
    const [ time, setTime ] = useState(60)
    function increment () {
         if(start)return 
        setStart(true)
        if(outFn)outFn()
    }
    useEffect(() => { 
        let interval
        if (start) {
          interval = setInterval(() => {
            setTime(t => t - 1) 
          }, 1000)
        }
        return () => clearInterval(interval) 
      }, [ start ]) 
    return (
        <View onClick={increment} className={['my-class','getcode',start ? 'graycode' : '']}>{start ? `${time} s` : '获取验证码'}</View>
    )
}


Counter.externalClasses =  ['my-class']
 

 export default  Counter
