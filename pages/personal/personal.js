const util = require('../../utils/util.js');
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    url:"../../pages/contact/contact",
    url1:"../../pages/cardBag/cardBag"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    if (app.globalData.userInfo) {
      var a = app.globalData.userInfo;
      a.avatarUrl = a.avatarUrl != "" ? a.avatarUrl :"../../images/default_user.jpg";
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        var a = res.userInfo;
        a.avatarUrl = a.avatarUrl != "" ? a.avatarUrl : "../../images/default_user.jpg";
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo;
          var a = res.userInfo;
          a.avatarUrl = a.avatarUrl != "" ? a.avatarUrl : "../../images/default_user.jpg";
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }

    this.setData({
      url: "../../pages/contact/contact",
      url1: "../../pages/cardBag/cardBag"
    })
  },
  goToCardBag: function(){
    wx.switchTab({
      url: this.data.url1
    });
  },
  goToContact: function(){
    wx.navigateTo({
      url: this.data.url
    });
  }
})