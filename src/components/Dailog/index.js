import Taro, { Component } from '@tarojs/taro'

import {View} from '@tarojs/components'

import './index.less'

class Dailog extends Component {

    componentDidMount(){ 
       this.myAnimation(0)
    }
    myAnimation(num){
        let animation = wx.createAnimation({
            duration: 400,
            timingFunction: "ease",
          })
          animation.translateY(num).step()
          this.setState({
            animationData: animation.export() //动画实例的export方法导出动画数据传递给组件的animation属性 
          })
     }
     changeLog(){
            const {changeLog,close} = this.props;
            if(!close)return
            this.myAnimation(400)
            setTimeout(function () {
                changeLog && changeLog(false)
            },400)
     }
    render(){
        return <View   className={['popShade']}  onClick={this.changeLog.bind(this)} >
                 <View className='content' onClick={e=> e.stopPropagation()}  animation={this.state.animationData}>
                     {this.props.children}
                 </View>
               </View>
    }
}

export default  Dailog
