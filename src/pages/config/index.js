"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

export  default  {
  czb_api: {
    ENV: "master",
    platformType:10088001,
    master: {
      appKey: "kd_prod_mp",
      appId:'wx01440835f1987e8b',
      appSecret: "15cdf1eaf2110a3009bf2be5d3e53c3c",
      host: "https://mpcs.fleetingpower.com",
      burryUploadUrl: "",
      activityUrl: ""
    },
    dev: {
      appKey: "test_mp",
      appId:'wx01440835f1987e8b',
      appSecret: "12343456900156789012",
      host: "https://test-mpcs.fleetingpower.com",
      burryUploadUrl: "",
      activityUrl: ""
    },
    path: {
      getTelCode: "/services/v3/begin/commonSendMsg",//  get phone code
      signUp: "/services/v3/user/sdwechatMPRegisterLoginAppV4", // login
      signIn: "/services/v3/user/sdwechatMPLoginAppV4", // signIn
      userInfo: "/services/v3/user/findMyInfoAppV4", // user Info
      businessPolicyList: "/services/v3/charge/businessPolicyList", // 充电策略
      detailpage: "/services/v3/charge/getStationInfoDetailNew", // details
      pageList: "/services/v3/wechat/stationInfoPageList", //  list   and  search
      qrcodeDetail: "/services/v3/charge/scanQRCode",  //  qrcodeDetail
      discountList: "/services/v3/charge/queryCoupon4ChargeByStatusPage", // page: discount
      inputNumber: "/services/v3/charge/inputNumber",  //    import   code
      getScreenList: "/services/v3/charge/getScreenList",  //  get    brand
      beginCharge: "/services/v3/chargeOrder/beginCharge",  // begin charging
      charging: "/services/v3/chargeOrder/charging",  //  充电中详情
      endCharge: "/services/v3/chargeOrder/endCharge",  //  end  charging
      getUnfinishedOrder: "/services/v3/chargeOrder/getUnfinishedOrder",  // 是否有订单充电
      stayPayChargeOrderInfo: "/services/v3/chargeOrder/settlementChargeOrderInfo",  //结算的详情
      payMoneyByOrder: '/services/v3/chargeOrder/settlementPayChargeOrder', // page: chargeMoney  支付订单接口
      getOrderList: '/services/v3/chargeOrder/getOrderList', // page: chargeOrders
      getChargeOrderTotal: '/services/v3/app40/getOrderTotal',     // page: chargeOrders
      getOrderInfo: '/services/v3/chargeOrder/getOrderInfo', // page: chargeDetails
      chargeMoney: '/services/v3/charge/chargeApplyDeposit', // page: chargeMoney
      getChargeList: '/services/v3/charge/queryDepositListByPage', // page: chargeList
      getChargeDetails: '/services/v3/charge/queryDepositOrderDetail', // page: chargeDetails
      accountUserInfo: '/services/v3/user/findMyInfoAppV4', // page: userInfo
      getUseableTicket: '/services/v3/charge/queryCoupon4Charge4Pay', // page useableTickets
      getCarNumber: '/services/v3/chargeOrder/order/carnum', //getCarNumber
      setCarNumber: '/services/v3/chargeOrder/push/carnum', //setCarNumber
      getPayType: '/services/v3/cms/getPayType', // page myaccount
    }
  },
  czb_public: {
    path: {
      "downComent": "/public/comment/download"
    }
  },
  czb_webHM: {}
};
