//index.js
//获取应用实例

Page({
  data: {
    
  },
  goCenter(){
    this.ctx.moveToLocation();
  },
  onShow(){
    this.currentLocation();
    this.ctx = wx.createMapContext("map")
  },
  currentLocation(){
    wx.getLocation({
      type:'gcj02',
      altitude:true,
      success: (res)=> {
        this.setData({
          longitude:res.longitude,
          latitude:res.latitude,
        })
      },
    })
  },
  onShareAppMessage(){
    return {
      title:'萌宠交易平台',
      path:'/page/index/index'
    }
  },
  gopub(){
    wx.navigateTo({
      url: '/pages/publish/publish',
    })
  }
})
