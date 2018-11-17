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
    this.getlist();
  },
  // 详情
  markertap(e){
    console.log(e)
    wx.navigateTo({
      url: '/pages/detail/detail?id='+e.markerId,
    })
  },

  getlist(){
    wx.request({
      url: 'http://localhost:3000/list',
      header:{"content-type":"application/json"},
      method:"GET",
      success:(res)=>{
        console.log(res);
        var arr = res.data.map((item)=>{
          return {
            iconPath:"/resources/"+item.type+".png",
            id:item.id,
            latitude: item.latitude,
            longitude:item.longitude,
            width:30,
            height:30
          }
        })
        this.setData({
          markers:arr
        })
      }
    })
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
  },
  gosearch(){
    wx.navigateTo({
      url: '/pages/search/search',
    })
  }
})
