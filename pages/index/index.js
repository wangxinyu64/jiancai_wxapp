//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
   
  },

  onLoad: function () {
  
  },
 //去注册
  toSign: function(){
    wx.navigateTo({
      url: '/pages/login/sign',
    })
  }
})
