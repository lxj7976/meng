// pages/publish/publish.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    address:"点击选择，要勾选哦~"
  },
  info:{
    type:'sell'
  },
  // 选择地址
  choose(){
    wx.chooseLocation({
      success: (res)=> {
        this.setData({
          address:res.address
        }),
          Object.assign(this.info, {
            address: res.address,
            longitude: res.longitude,
            latitude: res.latitude,
          })  
      },
    })
  },
  
  // 选择类型
  radioChange(e){
    this.info.type=e.detail.value
    console.log(this.info)
  },
  // 说明
  inputdesc(e){
    this.info.msg= e.detail.value;
    console.log(this.info)
  },
  // 联系方式
  inputcontact(e){
    this.info.contact=e.detail.value;
    console.log(this.info)
  },
  pub(){
    wx.request({
      url: 'http://localhost:3000/list',
      data:this.info,
      method:"post",
      header:{"content-type":"application/json"},
      success:(res)=>{
        wx.showModal({
          title: '操作提示',
          content: '发布成功',
          showCancel:false,
          success(res){
            wx.navigateBack({
              delta:1,
            })
          }
        })
      }
    })
  },
  re(e){
    console.log(e.detail.c)
  },
  zhi(e){
    console.log(e.detail.c)
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

  }
})