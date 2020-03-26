//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    myposition:''
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
<<<<<<< HEAD
      // url: '../logs/logs'
      url: '../city/city'
    })
  },
  onLoad: function () {
    console.log('index.js onl')
=======
      url: '../logs/logs'
    })
  },
  onLoad: function () {
>>>>>>> b7a1dbeb4a1f5cafcaa6493f81a1063eb5012f4d
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
    
<<<<<<< HEAD
    // wx.getLocation({
    //   success:function(res){
    //    console.log(res)
    //     console.log('获取成功')
    //   },
    //   fail:function(res){
    //     console.log('获取失败')
    //   }
    // })
    


  },
   
   //获取地理位置
  // getAddressDetail: function () {
  //   let that = this;

  //   wx.getLocation({
  //     type: 'wgs84',// 参考系
  //     success: function (res) {
  //       console.log(res)
  //       var latitude = res.latitude;
  //       var longitude = res.longitude;
  //       console.log("纬度=" + latitude + " 经度=" + longitude);

  //     }
  //   })
  // },



=======
    wx.getLocation({
      success:function(res){
       console.log(res)
        console.log('获取成功')
      },
      fail:function(res){
        console.log('获取失败')
      }
    })

  },
>>>>>>> b7a1dbeb4a1f5cafcaa6493f81a1063eb5012f4d
  getUserInfo: function(e) {
    if (!e.detail.userInfo){
       console.log('用户点击拒绝')
    }else{
      console.log('用户点击允许')
      app.globalData.userInfo = e.detail.userInfo
      this.setData({
        userInfo: e.detail.userInfo,
        hasUserInfo: true
      })
    }


  }
})
