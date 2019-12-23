import Taro, { Component } from '@tarojs/taro'
import { View, Image ,  Input ,Button} from '@tarojs/components'
import './login.less'
import  logo from './logo.png'

export default class Login extends Component {

  config = {
    navigationBarTitleText: '地推身份登记',
    phone:2,
    code:'',
    getCodeing:false,
    secend:60
  }
  time=''


  componentDidMount () { 
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  nextClick (res) {
     Taro.navigateTo({
       url:`/pages/qrcode/qrcode?urlStr=${res}`
     })
  }
  telChange (e){
    let str=e.target.value.replace(/\D/g,'')*1||'';
    str=(str+'').substr(0,11)
    this.setState({
      phone:str
    })
    return  str
  }
  checkoutlogin (tel,code){
    if(!tel){
     return '请输入电话号'
    }
    var  isphone=/^1[3|4|5|8|9|7|6][0-9]\d{4,8}$/.test(tel);
    if(!isphone){
      return '请输正确的手机号'
    }
    if(!code){
     return '请输入验证码'
    }
 }
  getCode (){
    if(this.state.getCodeing) return
    let str= this.checkoutlogin(this.state.phone,true)
    if(str){
     Taro.showToast({
       title: str,
       icon: 'none',
       duration: 2000
     })
     return
    }
     Taro.removeStorageSync('Token')
     this.creatTnterval()
    //  ajax({
    //    url:'getTelCode',
    //    data:{
    //      type:'dada',
    //      phone:this.state.phone,
    //    }
    //  })
  }
  creatTnterval (){
    const _this=this;
      this.setState({
        getCodeing:true,
        secend:60
      });
      clearInterval(this.time)
      this.time=setInterval(function (){
        _this.setState({
          secend:--_this.state.secend
        })
        if(!_this.state.secend){
          _this.clearInter()
          return
        }
      },1000)
  }
  clearInter (){
    this.setState({
      getCodeing:false,
    })
    clearInterval(this.time)
  }
  codeChange (e){
  let str=e.target.value.replace(/\D/g,'')||'';
   this.setState({
    code:str
   })
   return  str
  }
  render () {
    return (
      <View className='index'>
         <View className='logo'><Image src={logo} /></View>
         <View className='telphone line'>
           <Input type='number' onInput={this.telChange} value={this.state.phone} placeholderClass='placeholderClass' placeholder='请输入手机号' /></View>
         <View className='code line'>
           <Input  onInput={this.codeChange} value={this.state.code} placeholderClass='placeholderClass' type='number' placeholder='请输入验证码' />
           <View onClick={this.getCode.bind(this)} className={['getcode',this.state.getCodeing?'graycode':'']}>{this.state.getCodeing?`${this.state.secend} s`:'获取验证码'}</View>
         </View>
         <Button className='btn' onClick={this.nextClick} >下一步</Button>
      </View>
    )
  }
}

