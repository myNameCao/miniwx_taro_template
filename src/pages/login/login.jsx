import Taro, { Component } from '@tarojs/taro'
import { View, Image ,  Input ,Button} from '@tarojs/components'
import './login.less'
import  logo from './logo.png'
import  {ajax ,checkAuthorization,Authorization,signUp} from '../../utils/ajax'
import  Dialog from '../../components/Dailog'
import  Loading from '../../components/Loading'

export default class Login extends Component {

  config = {
    navigationBarTitleText: '地推身份登记',
  }
  state={
    phone:'',
    code:'',
    canSend:true,
    showDialog:false,
    getCodeing:false,
    secend:60
  }
  time=''
  componentDidMount () {
    let _this = this
    checkAuthorization('userInfo').then(function(isPass){
      if(!isPass){
        _this.setState({
          showDialog:true
        })
      }else{
        wx.getUserInfo({success(res){
          Authorization(res)
        }})
      }
    }) 
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  nextClick () {
   if(!this.state.canSend) return 
    let str =  this.checkoutlogin(this.state.phone,this.state.code)
    if(str){
      Taro.showToast({
        title: str,
        icon: 'none',
        duration: 2000
      })
      return
    }
    if(!signUp({phone:this.state.phone,code:this.state.code,})){
      this.setState({
        showDialog:true,
        canSend:false 
       })
    }
  }
  telChange (e){
    let str = e.target.value.replace(/\D/g,'') * 1 || '';
    str = (str + '').substr(0,11)
    this.setState({
      phone:str
    })
    return  str
  }
  checkoutlogin (tel,code){
    if(!tel){
     return '请输入电话号'
    }
    let  isphone = /^1[3|4|5|8|9|7|6][0-9]\d{4,8}$/.test(tel);
    if(!isphone){
      return '请输正确的手机号'
    }
    if(!code){
     return '请输入验证码'
    }
 }
  getCode (){
    if(this.state.getCodeing) return
    let _this = this
    let str = this.checkoutlogin(this.state.phone,true)
    if(str){
     Taro.showToast({
       title: str,
       icon: 'none',
       duration: 2000
     })
     return
    }
     Taro.removeStorageSync('Token')
     ajax({
       url:'getTelCode',
       data:{
         type:'dada',
         phone:this.state.phone,
         success(){
          _this.creatTnterval()
         }
       }
     })
  }
  creatTnterval (){
    const _this = this;
      this.setState({
        getCodeing:true,
        secend:60
      });
      clearInterval(this.time)
      this.time = setInterval(function (){
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
  let str = e.target.value.replace(/\D/g,'') || '';
   this.setState({
    code:str
   })
   return  str
  }
  getUserInfo(data){
    this.setState({
      showDialog:false
    })
    Authorization(data.detail)
  }
  render () {
    return (
      <View className='index'>
         <View className='logo'><Image src={logo} /></View>
         <View className='telphone line'>
           <Input type='number' onInput={this.telChange} value={this.state.phone} placeholderClass='placeholderClass' placeholder='请输入手机号' /></View>
         <View className='code line'>
           <Input  onInput={this.codeChange} value={this.state.code} placeholderClass='placeholderClass' type='number' placeholder='请输入验证码' />
           <View onClick={this.getCode.bind(this)} className={['getcode',this.state.getCodeing ? 'graycode' : '']}>{this.state.getCodeing ? `${this.state.secend} s` : '获取验证码'}</View>
         </View>
    <Button className='btn' onClick={this.nextClick} >{this.state.canSend ? '下一步' : <Loading  status='loading' size='40' color='white' ></Loading>}</Button>
         
         {this.state.showDialog && <Dialog  >
            <View   className='logContent' >
                <View  className='logTitle'>想要你的授权</View>
                <View  className='logmsg'>为了提供更好的服务</View>
                <View  className='logmsg'>请在稍后的提示框点击“允许”</View>
                <View  className='logImage'></View>
                <Button   open-type='getUserInfo'   onGetuserinfo={this.getUserInfo} className='logBtn' >我知道了</Button>
            </View>
          </Dialog>}
      </View>
    )
  }
}

