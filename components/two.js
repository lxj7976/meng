// components/two.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    d:{
      type:String
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    sendTo(){
        this.triggerEvent("chuan", { "c":"传值" + this.properties.d})
    }
  }
})
