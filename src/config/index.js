
export default {
  czb_api: {
    platformType: "10088001",
    production: {
      appKey: "fl_prod_mp",
      appId: "wx08061489992067f3",
      appSecret: "00d9f9637625a46fdb6861d79d207cdf",
      host: "https://mpcs.fleetingpower.com"
    },
    development: {
      appKey: "fl_test_mp",
      appId: "wx08061489992067f3",
      appSecret: "00d9f9637625a46fdb6861d79d207cdf",
      host: "127.0.0.1"
    },
    path: {
      getTelCode: "/services/v3/begin/commonSendMsg", //  get phone code
      signUp: "/services/v3/begin/fuliWechatMPRegisterLogin", // login
      signIn: "/services/v3/begin/fuliWechatMPLogin", // signIn
      deatilActivity:"/services/v3/pullNewActivity/activityDetailsPage",
      queryActivityList: "/services/v3/pullNewActivity/queryActivityList",
      startActive: "/services/v3/pullNewActivity/startInvite",
      shareMessage: "/services/v3/pullNewActivity/shareInfo",
      assistInvite: "/services/v3/pullNewActivity/assistInvite",
    }
  },
  czb_public: {
    path: {
      downComent: "/public/comment/download"
    }
  },
  czb_webHM: {}
};
