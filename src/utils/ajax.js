/* eslint-disable no-undef */
import erroeMes from '../config/errorMes'

import util from './index.js';

import api from '../config/index';

const api_private = api['private'];

const ENV = process.env.NODE_ENV;

const BASE = api_private[ENV];

let encryptedData = '',wechatToken = '',iv = '';

export const ajax = P => {
  let data = P.data || {};
  let portUrl = BASE['host'] + api_private['path'][P.url]
  data.token = wx.getStorageSync('Token') || '';
  data = util.generate(data);
  if(P.loading){wx.showLoading({title: '加载中',mask:true})}
  wx.request({
    url: portUrl,
    data: data,
    method: P.type || 'POST',
    header: {
      'content-type': 'application/x-www-form-urlencoded'
    },
    success: function(res) {
    let errObj = erroeMes[res.data.code];
      if(res.data.code != 200){//  异常捕捉
        P.special ? P.special(res) : (errObj ? errObj.callBack(res.data,login) : erroeMes.default(res.data,P.error))
      }else{
        P.success && P.success(res.data)
      }
    },
    complete(){
      if(P.loading){wx.hideLoading()}
    },
    fail: function(res) {
      P.fail && P.fail(res)
      wx.showToast({
        title: '网络请求失败，请检查您的网络配置',
        icon: 'none'
      });
    }
  });
};
export const login = P =>{
   wx.removeStorageSync('Token');
   const promiseWx = new Promise(function(resolve) {
        wx.login({
          success: res => {
            let code = res.code;
            resolve(code)
          }
        });
   });
   promiseWx.then(function(code){
      ajax({
            url:P.url || 'signIn',
            data:{
              code: code,
            },
            special(res){
              wx.hideLoading();
              if (res.data.code === 201 && !P.notMust){
                wx.redirectTo({
                  url:'/pages/login/login'
                });//  携带  wechatToken  进入注册页面
                wechatToken = res.data.result.wechatMPToken;
              }
            },
            success(){
              // wx.setStorage({ key: 'Token', data: res.result.token });
              wx.redirectTo({
                url:`/pages/index/index`
              });//  携带  wechatToken  进入注册页面
              //  获得当前页面   刷新
            }
          })
      });
}; //登录接口
export const Authorization = P =>{
    encryptedData = P.encryptedData,
    iv = P.iv
}; //登录授权
export const checkAuthorization = type =>{
  let p = new Promise(function(resolve){
            wx.getSetting({
              success (res) {
                let obj = res.authSetting
                let str = 'scope.' + type
                resolve(obj[str])
              }
            })
         })
         return p
}; // 判断授权 

export const signUp = P =>{
  if(!encryptedData) return false // 如果微信没有授权   return  false 检测重新授权
  ajax({
    url:'signUp',
    loading:true,
    data:{
      phone:P.phone,
      code:P.code,
      wechatMPToken:wechatToken,
      encryptedData:encryptedData,
      iv:iv
    },
    error(){
      P.success()
    },
    success(){
      P.success()
      
    }
  })
  return true 
}; //注册接口

