//index.js
//获取应用实例
var result = require("../../data/post-data.js");
const app = getApp();

Page({
  data: {
    slideUser:[],
    cardInfo:[],
    favourable:[],
    shopInfo:{},
    huodongImg:{}
  },
  onLoad: function (options) {
    this.setData({
      shopInfo: result.localData.shopInfo,
      slideUser: result.localData.slideUser,
      cardInfo: result.localData.cardInfo,
      favourable: result.localData.favourable,
      huodongImg: result.localData.huodongImg,
      url:"../../pages/buy/buy"
    })
  },
  gomap: function () {
    wx.openLocation({
      latitude: Number(result.localData.shopInfo.jing),
      longitude: Number(result.localData.shopInfo.wei),
      address: result.localData.shopInfo.address
    })
  },
  call: function () {
    wx.makePhoneCall({
      phoneNumber: result.localData.shopInfo.shopPhoneNumber, //此号码并非真实电话号码，仅用于测试
      success: function () {
        console.log("拨打电话成功！")
      },
      fail: function () {
        console.log("拨打电话失败！")
      }
    })
  },
  tobuyCardTap:function(){
    wx.navigateTo({
      url:this.data.url
    })
  }
})
