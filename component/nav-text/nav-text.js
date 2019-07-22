// component/nav-text/nav-text.js
var app = getApp();
Component({
  /**
   * 组件的属性列表
   */

  properties: {
    font_size: Number,
    pageName: String,
    show_back: Boolean,
  },

  /**
   * 组件的初始数据
   */
  data: {
    statusH: parseInt(app.globalData.statusH),
    navigationH: parseInt(app.globalData.navigationH),
    topBarH: parseInt(app.globalData.statusH) + parseInt(app.globalData.navigationH),
  },

  /**
   * 组件的方法列表
   */
  methods: {
    back: function () {
      wx.navigateBack({
        delta: 1
      })
    }
  },
 
})
