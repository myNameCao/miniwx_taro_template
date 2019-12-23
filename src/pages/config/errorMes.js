'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
//   统一的
var fail = wx.showToast; //  函数可替换
  const errorMes = {
  10011: {
    title: '非法请求，缺少系统级参数',
    msg: '',
    icon: "none",
    callBack: function callBack() {
      fail({
        title: this.title,
        icon: this.icon
      });
    }
  },
  10012: {
    title: '非法请求，未知的调用方',
    msg: '',
    icon: "none",
    callBack: function callBack() {
      fail({
        title: this.title,
        icon: this.icon
      });
    }
  },
  10013: {
    title: '请求过期，请检查手机时间',
    icon: "none",
    msg: '',
    callBack: function callBack() {
      fail({
        title: this.title,
        icon: this.icon
      });
    }
  },
  10014: {
    title: '非法请求，签名sign验证失败',
    icon: "none",
    msg: '',
    callBack: function callBack() {
      fail({
        title: this.title,
        icon: this.icon
      });
    }
  },
  10021: {
    title: '您还没有登录呢，登录后才可享受优惠哦~',
    icon: "none",
    msg: '',
    callBack: function callBack(res,login) {
      wx.showToast({
        title: '您还没有登录呢，登录后才可享受优惠哦~',
        icon: 'none'
      });
      setTimeout(function () {
        login({})
      },2000)
    }
  },
  10022: {
    title: '登录过期，请重新登录。',// TODO  返回的信息 有问题 
    msg: '',
    icon: "none",
    callBack: function callBack(res,login) {
      fail({
        title: this.title,
        icon: this.icon
      });
      wx.removeStorageSync('Token');
      setTimeout(function () {
        login({})
      },2000)
    }
  },
  10023: {
    title: '您的账号在其他设备登录，请重新登录。',
    msg: '',
    icon: 'none',
    callBack: function callBack(res,login) {
      fail({
        title: this.title,
        icon: this.icon
      });
      wx.removeStorageSync('Token');
      setTimeout(function () {
        login({})
      },2000)

    }
  },
  default:function(res,fun) {
      fail({
        title: res.message,
        icon: 'none',
      });
      if(fun){
        setTimeout(function(){
          fun(res)
        },2000)
      }
  }
};
export default errorMes;