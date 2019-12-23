
export  default  {
  czb_api: {
    ENV: "dev",
    platformType:'',
    master: {
      appKey: "kd_prod_mp",
      appId:'wx01440835f1987e8b',
      appSecret: "15cdf1eaf2110a3009bf2be5d3e53c3c",
      host: "https://mpcs.fleetingpower.com",
    },
    dev: {
      appKey: "test_mp",
      appId:'wx01440835f1987e8b',
      appSecret: "12343456900156789012",
      host: "https://test-mpcs.fleetingpower.com",
    },
    path: {
      getTelCode: "/services/v3/promoterBegin/sendMsg",//  get phone code
      signUp: "/services/v3/promoterBegin/wechatMPRegisterLogin", // login
      signIn: "/services/v3/promoterBegin/wechatMPLogin", // signIn
      userInfo: "/services/v3/user/findMyInfoAppV4" // user Info
    }
  },
  czb_public: {
    path: {
      "downComent": "/public/comment/download"
    }
  },
  czb_webHM: {}
};
