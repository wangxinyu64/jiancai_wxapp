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
    second_category:[
      { name: '建材', id: 0,},
      { name: '门窗', id: 1,},
      { name: '沙发', id: 2,},
      { name: '窗帘', id: 3,}
    ],
    third_category: [
      { name: '五金', url: '/images/cat1.png', id: 0 },
      { name: '三级类目', url: '/images/cat2.png', id: 1 },
      { name: '五金', url: '/images/cat1.png', id: 2 },
      { name: '三级类目', url: '/images/cat2.png', id: 3 },
    ],
    second_category_id: 0,       //当前点击的二级类目id 
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
  },

  //点击二级类目
  secondCategoryTap: function(e) {
    var that = this;
    var second_category_id = e.currentTarget.dataset.id;
    this.setData({
      second_category_id: second_category_id
    })
  },

  //点击三级类目
  toThirdCategoryDetail: function(e) {
    var id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: './category-detail',
    })
  }
})