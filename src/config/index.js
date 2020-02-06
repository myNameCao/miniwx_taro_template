
export default {
  czb_api: {
    platformType: "10088001",
    production: {
      appKey: "fl_prod_mp",
      appId: '',
      appSecret: '',
      host: ''
    },
    development: {
      appKey: "",
      appId: "",
      appSecret: "",
      host: ""
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
