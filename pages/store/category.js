// pages/store/category.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    statusBarHeight: 0,  //状态栏高度
    sRpx: 0,
    navigationH: 0,
    second_category:[1,2,3,4,5,6,7,8,9]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      statusBarHeight: app.globalData.statusH,  //状态栏高度
      sRpx: app.globalData.sRpx,
      navigationH: app.globalData.navigationH
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  //返回上一页
  back: function() {
    wx.navigateBack({
      delta:1
    })
  }
})