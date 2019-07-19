//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    statusBarHeight: 0,      //状态栏高度,
    navigationH: 0,
    sRpx: 0,
    now_banner: '../../images/banner.png',    //当前轮播图
    swiper_item: 0,   //当前轮播图片index
    banner_array: [
      '/images/banner.png',
      '/images/cat1.png'
    ],      //banner轮播图
    show_search: true,      //是否显示搜索icon
    keywords: '',              //搜索栏输入的关键词
  },

  onLoad: function () {
    this.setData({
      statusBarHeight: app.globalData.statusH,  //状态栏高度
      sRpx: app.globalData.sRpx,
      navigationH: app.globalData.navigationH
    })
  },
  //轮播图改变事件
  swiperChange: function (e) {
    var swiper_item = e.detail.current;
    this.setData({
      swiper_item: swiper_item
    })
  },
  //监听搜索input获取焦点
  hideSearchIcon: function (e) {
    var show_search = this.data.show_search;
    this.setData({
      show_search: false
    })
  },
  //监听搜索input失去焦点
  showSearchIcon: function (e) {
    var show_search = this.data.show_search;
    this.setData({
      show_search: true,
      keywords: ''
    })
  },
  //监听搜索input输入
  searchInput: function (e) {
    var keywords = e.detail.value;
    this.setData({
      keywords: keywords
    })
  },
  //提交顶部搜索栏的关键词
  searchKeywords: function (e) {
    var keywords = e.detail.value;
    console.log(keywords);
  },

  //跳转二级类目
  toCategory: function (e){
    wx.navigateTo({
      url: '/pages/store/category',
    })
  }
})
