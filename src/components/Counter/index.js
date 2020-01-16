import Taro, { useState ,useEffect} from '@tarojs/taro'

import {View} from '@tarojs/components'

import './index.less'

let interval
 function  Counter  (props){
    const {outFn} = props;
    const [ start, setStart ] = useState(false)
    const [ time, setTime ] = useState(60)
    function increment () {
        if(start)return 
        if(outFn && outFn()){
            setStart(true)
        }
    }
    useEffect(() => {
        if (start) {
          interval = setInterval(() => {
            setTime(t => t - 1) 
          }, 1000)
        }
        return () => clearInterval(interval) 
      }, [ start ]) 
    useEffect(() => { 
       if(!time){
        clearInterval(interval) 
        setStart(false)
       }
      }, [time]) 

    return (
        <View onClick={increment} className={['my-class','getcode',start ? 'graycode' : '']}>{start ? `${time} s` : '获取验证码'}</View>
    )
}
Counter.externalClasses =  ['my-class']

 export default  Counter
