import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [{
    path: '/', //地图
    name: 'home',
    component: function (resolve) {
      require(['./example/fragment/home.vue'], resolve)
    }
  }, {
    path: '/button', //Button
    name: 'button',
    component: function (resolve) {
      require(['./example/fragment/button.vue'], resolve)
    }
  }, {
    path: '/Badge', //徽章
    name: 'Badge',
    component: function (resolve) {
      require(['./example/fragment/Badge.vue'], resolve)
    }
  }, {
    path: '/list', //List
    name: 'list',
    component: function (resolve) {
      require(['./example/fragment/list.vue'], resolve)
    }
  }, {
    path: '/grid', //九宫格
    name: 'grid',
    component: function (resolve) {
      require(['./example/fragment/grid.vue'], resolve)
    }
  }, {
    path: '/step', //步骤
    name: 'step',
    component: function (resolve) {
      require(['./example/fragment/step.vue'], resolve)
    }
  }, {
    path: '/switch', //开关
    name: 'switch',
    component: function (resolve) {
      require(['./example/fragment/switch.vue'], resolve)
    }
  }, {
    path: '/picker', //列表
    name: 'picker',
    component: function (resolve) {
      require(['./example/fragment/picker.vue'], resolve)
    }
  }, {
    path: '/input', //input
    name: 'input',
    component: function (resolve) {
      require(['./example/fragment/input.vue'], resolve)
    }
  }, {
    path: '/accordion', //Accordion
    name: 'accordion',
    component: function (resolve) {
      require(['./example/fragment/Accordion.vue'], resolve)
    }
  }, {
    path: '/slider', //Slider
    name: 'slider',
    component: function (resolve) {
      require(['./example/fragment/Slider.vue'], resolve)
    }
  }, {
    path: '/uploader', //Uploader
    name: 'uploader',
    component: function (resolve) {
      require(['./example/fragment/Uploader.vue'], resolve)
    }
  }, {
    path: '/actionSheet', //ActionSheet
    name: 'actionSheet',
    component: function (resolve) {
      require(['./example/fragment/ActionSheet.vue'], resolve)
    }
  }, {
    path: '/dialog', //Dialog
    name: 'dialog',
    component: function (resolve) {
      require(['./example/fragment/Dialog.vue'], resolve)
    }
  },{
    path: '/toast', //Toast
    name: 'toast',
    component: function (resolve) {
      require(['./example/fragment/Toast.vue'], resolve)
    }
  },{
    path: '/loading', //Loading
    name: 'loading',
    component: function (resolve) {
      require(['./example/fragment/Loading.vue'], resolve)
    }
  }]
})

export default router
