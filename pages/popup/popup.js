// pages/popup.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    flag: false,
  },

  onTap: function (event) {
    wx.switchTab({
      url: "../index/index"
    });
  }
})