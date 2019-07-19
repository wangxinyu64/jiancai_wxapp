// pages/login/sign.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phone_input: false, //手机号输入框是否获取了焦点
    code_input: false,  //验证码输入框是否获取的了焦点
    phone_number: '', //输入的手机号
    code_flag: 0, // 0：未获取验证码   1：以获取验证码 cd中
    time: 60, //倒计时
    code: '',       //验证码
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  //当手机号输入框-获取焦点
  getFocus: function() {
    this.setData({
      phone_input: true
    })
  },
  //当验证码输入框-获取焦点
  codeGetFocus: function() {
    this.setData({
      code_input: true
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
    let reg = /^1[0-9]{10}$/;
    if (!e.detail.value.match(reg)) {
      wx.showToast({
        title: '请输入正确的手机号码',
        icon: 'none'
      })
    }
    if (e.detail.value == '') {
      this.setData({
        phone_input: false
      })
    }
  },
  //点击 X 清空输入框
  cancelInput: function() {
    this.setData({
      phone_number: ''
    })
  },
  //获取验证码
  getCode: function() {
    var that = this;
    let phone_number = this.data.phone_number;
    let code_flag = this.data.code_flag;
    let reg = /^1[0-9]{10}$/;
    if (code_flag == 0){
      if (phone_number.match(reg)) {
        that.setData({
          code_flag: 1
        })
        //请求接口获取验证码
        let rest_time = 60;
        let timer = setInterval(function () {
          rest_time--;
          that.setData({
            time: rest_time
          });
          if (rest_time <= 0) {
            clearInterval(timer);   //时间到，清除定时器
            that.setData({
              code_flag: 0
            })
          }
        }, 1000);

      } else {
        wx.showToast({
          title: '请输入正确的手机号码',
          icon: 'none'
        })
      }
    }else{
      wx.showToast({
        title: '请稍后再试',
        icon:'none'
      })
    }
  
  },

  //输入验证码
  inputCode: function(e) {
    let code = e.detail.value;
    this.setData({ code: code})
  },

  //验证码输入框-失去焦点
  codeIputBlur: function(e) {
    if(e.detail.value == ''){
      this.setData({ code_input: false})
    }
  },

  //提交注册
  signUser: function() {
    let that = this;
    let phone = this.data.phone_number;
    let code = code;
    let reg = /^1[0-9]{10}$/;
    if (phone.match(reg) && code.length == 6){
      //请求接口-提交
      
    }else{
      wx.showToast({
        title: '请填写正确的手机号和验证码',
        icon:'none'
      })
    }
  }
})