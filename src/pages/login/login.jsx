
import logo from '@img/logo.png'
import  Dialog from  '@components/Dailog'
import  Loading from '@components/Loading'
import  Counter from '@components/Counter'


import Taro, {useState} from '@tarojs/taro'

import { View, Image ,  Input ,Button} from '@tarojs/components'

import './login.less'

import  {Authorization,signUp,ajax,checkAuthorization} from '../../utils/ajax'

function Login () {
  const [ phone, setPhone ] = useState('')
  const [ code, setCode ] = useState('')
  const [ canSend, setCanSend ] = useState(true)
  const [ showDialog, setshowDialog ] = useState(false)

function getCode (){
   let str = checkout(phone,true)
    if(str){
      Taro.showToast({
        title: str,
        icon: 'none',
        duration: 2000
      })
      return
    }
    ajax({
      url: "getTelCode",
      data: {
        type: "dada",
        phone: phone
      }
    });
    return true

}
function telChange (e){
    let str = e.target.value.replace(/\D/g,'') * 1 || '';
    str = (str + '').substr(0,11)
    setPhone(str)
    return  str
}
function checkout(tel ,tempcode){
    if(!tel){
     return '请输入电话号'
    }
    let  isphone = /^1[3|4|5|8|9|7|6][0-9]\d{4,8}$/.test(tel);
    if(!isphone){
      return '请输正确的手机号'
    }
    if(!tempcode){
     return '请输入验证码'
    }
}
function codeChange (e){
  let str = e.target.value.replace(/\D/g,'') || '';
   setCode(str)
   return  str
}
function checkoutsInfo(){
  checkAuthorization('userInfo').then(function(isPass){
    if(!isPass){
      setshowDialog(true)
    }else{
      wx.getUserInfo({success(res){
        Authorization(res)
      }})
    }
  })
}
function getUserInfo(data){
    setshowDialog(false)
    Authorization(data.detail)
}
function nextClick () {
  if(!canSend) return
   let str =  checkout(phone,code)
   if(str){
     Taro.showToast({
       title: str,
       icon: 'none',
       duration: 2000
     })
     return
   }
    setCanSend(false)
    let data = {
             phone:this.state.phone,
             code:this.state.code,
             success(){
              setCanSend(true)
             }
          }
   if(!signUp(data)){
     setCanSend(true)
     checkoutsInfo()
   }
}
    return (
      <View className='index'>
         <View className='logo'><Image src={logo} /></View>
         <View className='telphone line'>
            <Input type='number' onInput={telChange} value={phone} placeholderClass='placeholderClass' placeholder='请输入手机号' />
            <Counter outFn={getCode} my-class='getcodebtn' ></Counter>
          </View>
         <View className='code line'>
           <Input  onInput={codeChange} value={code} placeholderClass='placeholderClass' type='number' placeholder='请输入验证码' />
         </View>
    <Button className='btn' onClick={nextClick} >{canSend ? '立刻登录' : <Loading  status='loading' size='40' color='white' ></Loading>}</Button>
         {showDialog && <Dialog  >
            <View   className='logContent' >
                <View  className='logTitle'>想要你的授权</View>
                <View  className='logmsg'>为了提供更好的服务</View>
                <View  className='logmsg'>请在稍后的提示框点击“允许”</View>
                <View  className='logImage'></View>
                <Button   open-type='getUserInfo'   onGetuserinfo={getUserInfo} className='logBtn' >我知道了</Button>
            </View>
          </Dialog>}
      </View>
    )

}

Login.config = {
  navigationBarTitleText: ' 登录',
}
export default  Login
