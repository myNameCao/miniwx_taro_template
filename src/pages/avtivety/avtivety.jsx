import Taro, { Component } from '@tarojs/taro'

import { View,Text, Button} from '@tarojs/components'

import { ajax } from "@utils/ajax"
import Title from '@components/Title'

import './avtivety.less'

export default class Avtivety1 extends Component {
  config = {
    navigationBarTitleText: 'test',
    navigationBarTextStyle: "white",
    navigationBarBackgroundColor:'#F04F59'
  }
  activityCode=null// 活动code
  inviteCode=null // 外部邀请code
  isMyinvite=null // 自己的邀请
  isFirst = true // 判断初始化的开始  兼容
  state={
    status:3,// 0 进行中  1 成功  2 失败  3 待发起   
    role:3, // 1 发起者   2 助力者  3 游客  
    shareCode: '',//  自己的链接
    shareMessage:{
      shareMsg1:'',
      shareMsg2:'',
      shareUrl:'',
      shareImg:''
    },
    sponsor:{}, // 发起人
  }
  componentDidMount () {
   this.getShareMessage()
  }
  componentWillUnmount () { }

  componentDidShow () {
   const { activityCode,inviteCode} =  this.$router.params;
   this.activityCode = activityCode || ''
   this.inviteCode = inviteCode || ''
   if(this.inviteCode === 'undefined'){
         this.inviteCode = ''
   }
   if(this.isMyinvite){
    this.inviteCode = ''
   }
   this.isFirst = true
   this.getData()
  }
  onShareAppMessage (option){
   
    const sharefromButton = option.from == 'button'
    const {shareMessage} = this.state
    let path = sharefromButton ? `?activityCode=${this.activityCode}&inviteCode=${this.state.shareCode}` : `?activityCode=${this.activityCode}`
    return  {
      title:sharefromButton ? shareMessage.shareMsg1 : shareMessage.shareMsg2,
      imageUrl:shareMessage.shareImg,
      path: shareMessage.shareUrl + path
    }
   
  }
  getData(){
    const _this = this
    ajax({
      url: "deatilActivity",
      data:{
      activityCode:this.activityCode.trim(),
      inviteCode:this.inviteCode.trim(),
      },
      success(res) {
        _this.dealData(res.result)
        _this.isFirst = false
      }
    });
  }
  getShareMessage(){
    let _this = this
      ajax({
        url: 'shareMessage',
        success(res) {
          _this.setState({
            shareMessage:res.result
          })
        }
      }); 
  }
 
  dealData(res){
    if(!res)return
    let inviteDto = res.inviteDto || {}
    this.setState({
      sponsor:inviteDto,
      status:null || res.status,
      role: null ||  res.isInvite,
    })

  }// 数据 二次处理
  clickBtn (){
      let _this = this
      const {status,role} = this.state
      const {btnactiveUrl} = this.computText(status,role)
      if(!this.allow){
          wx.requestSubscribeMessage({
          tmplIds: ['o-3Fr2j5CUzPEyIXCrethubB2IE11i8IA40L_IiIeng','Us9Y_PWlUCAg5KixxsQKz8xHvy-L6ato8uiL2zIUmNQ'],
          complete(){
            _this.allow = true
            ajax({
              url: btnactiveUrl,
              loading:true,
              data:{
              activityCode:_this.activityCode,
              inviteCode:_this.inviteCode
              },
              success(res) {
               _this.startFail(res,btnactiveUrl)
               _this.helpFail(res,btnactiveUrl)
              }
            });
          }
        })
      }else{
        ajax({
          url: btnactiveUrl,
          loading:true,
          data:{
          activityCode:_this.activityCode,
          inviteCode:_this.inviteCode
          },
          success(res) {
           _this.startFail(res,btnactiveUrl)
           _this.helpFail(res,btnactiveUrl)
          }
        });
      }
  }
  helpFail(res,url){
    const {code,msg} = res.result
    if(url != 'assistInvite'){
      return
    }
    if(code == 100004 || code == 100005 || code == 100005 || code == 100009 || code == 100008){
      
      wx.showToast({
        title: msg,
        icon: 'none'
      });
     }
    if(code == 100006){
       
     }
   this.getData()
  }
  startFail(res,url){
    const {code,msg} = res.result
    if(url != 'startActive'){
      return
    }
   if(code === 100001){
    wx.showToast({
      title: msg,
      icon: 'none'
    });
    setTimeout(()=> {
      Taro.redirectTo({
        url:'/pages/activeOver/activeOver'
      })
    },1000)
   }
   if(code === 100003){
      wx.showToast({
        title: msg,
        icon: 'none'
      });
   }
   this.isMyinvite = true 
   this.inviteCode = ''
   this.getData()
  }
  
  computText(status,role){
    let Obj = {
               btnText:'',
               btnactiveUrl:'',
               sponsorText:null
            }
    if(role == 1){// 发起者
     
      if(status == 0){
        Obj.btnText = '邀请好友助力'
        Obj.sponsorText = '助力发起中'
        
        
      }
      if(status == 1){
        Obj.btnText = ''
        Obj.sponsorText = '活动成功'
      }
      if(status == 2){
        Obj.btnText = '发起我的助力'
        Obj.btnactiveUrl = 'startActive'
        Obj.sponsorText = '活动失败'
      }
    }
    if(role == 2){ // 助力者

      Obj.btnText = '发起我的助力'
      Obj.btnactiveUrl = 'startActive'
    
      if(status == 0){
        Obj.sponsorText = '助力发起中'
      }
      if(status == 1){
        Obj.sponsorText = '活动成功'
      }
      if(status == 2){
        Obj.sponsorText = '活动失败'
      }
    }
    if(role == 3){// 游客
      
      if(status == 0){
        Obj.btnText = '为好友助力'       
        Obj.btnactiveUrl = 'assistInvite'
        Obj.sponsorText = '助力发起中'
       
      }
      if(status == 1){
        Obj.btnText = '发起我的助力'
        Obj.btnactiveUrl = 'startActive'
        Obj.sponsorText = '活动成功'
      }
      if(status == 2){
        Obj.btnText = '发起我的助力'
        Obj.btnactiveUrl = 'startActive'
        Obj.sponsorText = '活动失败'
      }
      if(status == 3){
        Obj.btnText = '立刻参与'
        Obj.sponsorText =  '待发起'
        Obj.btnactiveUrl = 'startActive'
      }
    }
    return Obj
  }
  render () {
    const { status, role } = this.state;
    // let statusTitle = this.computStatusTitle(status, role)
    let { btnText, sponsorText, btnactiveUrl } = this.computText(status, role)
    return (
      <View className='avtivety1'>
        <View className='active'>
          <View className='activetyConten'>
           <Title role={role} status={status}></Title>
            {btnText && !this.isFirst && <View className='btnActive'>
              {btnactiveUrl ? (<View onClick={this.clickBtn} className='statusBtnView'>
                {btnText}
              </View>) : <Button className='statusBtnView' open-type='share' >邀请好友助力</Button>}
            </View>}
          </View>
          
        </View>
        <View className='peoplelist'>
          <View className='listHeat'>
          </View>
          <View className='sponsorDiv item'>
            <View className='left'>
              <View className='avatar'>
              </View>
              <View className='nickname'>{this.state.sponsor.nickname}</View>
            </View>
            <View className='right'>
              {sponsorText != '待发起' ? sponsorText : <Text style={{color:'#333333'}}>{sponsorText}</Text>}
            </View>
          </View>
        </View>
      </View>
    )
  }
}
