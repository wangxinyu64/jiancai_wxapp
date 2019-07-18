// pages/login/sign.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phone_input: false,  //手机号输入框是否获取了焦点
    phone_number:'',      //输入的手机号
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
  //当手机号输入框-获取焦点
  getFocus: function() {
    this.setData({
      phone_input: true
    })
  },
  //监听手机号输入
  getPhoneNumber: function(e) {
    this.setData({
      phone_number: e.detail.value
    })
  },
  //当手机号输入框-失去焦点
  inputBlur: function(e) {
    if(e.detail.value ==''){
      this.setData({
        phone_input:false
      })
    }
  },
  //点击 X 清空输入框
  cancelInput: function() {
    this.setData({
      phone_number:''
    })
  }
})