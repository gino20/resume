export default {
  name: {
    chinese: '洪嘉晖',
    pinyin: 'Hong Jiahui',
  },
  nickname: 'gino20',
  post: 'WEB前端工程师',
  link: 'https://gino20.github.com/resume',
  contact: {
    location: '北京',
    email: 'gino20.hong@gmail.com',
    mobile: '13696924950',
    github: 'https://github.com/gino20',
  },
  profile: {
    gender: '男',
    birth: '1987.01',
    workingYears: '4年',
    hobbies: ['足球', '篮球'],
  },
  education: [
    {
      school: '福建农林大学',
      degree: '本科',
      major: '生物科学',
      during: '2005 ~ 2009',
    },
  ],
  career: [
    {
      company: '北京万门教育科技有限公司',
      during: '2014年10月 ~ 至今',
      post:
        '万门大学是一家综合型在线教育平台, 有自主的录制课程和直播课程, 内容包括大学课程, 中学课程, 各类小语种, 各类文理科课程等. ' +
        '工作内容包括前端架构搭建, 大部分页面的样式, 主要功能的开发. ' +
        '主要使用框架 React, Vue, React-Native, 小程序.',
      homepage: 'www.wanmen.org',
      projects: [
        {
          name: '官网项目',
          missions: [
            '使用 React 重构原来 Angular 1 搭建的项目, 从零开始配置 webpack + React, 并配置工程化所需要的 linter, formatter 等',
            '使用 flowtype 进行类型检测',
            '初期使用 Sass + Postcss 编写样式, 后由于 Postcss 配合插件能满足大部分使用场景, 故拿掉 Sass 使用 Postcss + css-modules',
            '尝试过 components + containers + views 的三层结构 和 components + containers 的双层结构 来组织项目',
            '初期使用 redux 进行数据管理, 后使用 mobx, 代码量相对少点也相对直观点, 借此了解了 functional programming 相关概念',
            '配合 react-router 在路由层实现按需加载, 以优化页面加载速度',
            '编写基础组件, 如 Button, Carousel, Modal 等',
            '使用 axios 拦截器进行全局 http 请求的处理',
            '实现注册登录, 视屏播放, 在线支付, 微信分享等功能',
            '为满足项目的扩展, 尝试过 拆分多个项目、一个项目同时打包多个dist、一个项目分别打包多个dist、monorepos 后, 选用 yarn workspaces 和 lerna 构建 monorepos',
            '使用 react hook 重构表单, 实现数据初始化, 数据修改, 数据校验等功能, 在不额外引入三方库的情况下有很强的自定义性',
            '不断进行其他技术方案的实现尝试, 如 worker、rxjs',
          ],
        },
        {
          name: '后台管理项目',
          missions: [
            '使用 react + antd 构建项目, 大量使用 Tabs、Table、Form 等组件',
            '表单校验尝试过 async-validator, 后选用 antd Form 自带的 api 实现',
            '在 mobx 的基础上拆分 action 和 state 文件, 以方便各 state 之间的相互依赖',
          ],
        },
        {
          name: '移动端项目',
          missions: [
            '使用 vue-cli 搭建 Vue 项目',
            '移动端适配采用 rem 方案, 后采用 vw 方案, 都有不错的表现',
            '为发挥 jsx 在 render 函数上优势, 采用 jsx 方式编写组件, 而不是常用的 template',
            '尝试不同方案实现截图分享, 包括纯客户端生成客户端保存、服务端生成图片、客户端生成上传静态资源服务器',
            '包装通用方法, 以调用 iOS 和 Android 提供原生方法',
          ]
        },
        {
          name: '销售用和推广用的小程序项目',
          missions: [
            '使用 原生, wepy, mpvue 构建项目, 为了更直接使用三方库, 更好支持async await, 更方便管理数据',
            '实现授权, 微信登录, 获取用户信息, 保存图片, 分享页面, 客服等功能',
            '使用 weui 样式库',
          ]
        },
        {
          name: '电视盒子项目',
          missions: [
            '使用 RN 构建项目, 参与开发视频播放, 在线支付, 权限判断等功能',
            '使用 touchable 组件实现 TV 端的焦点停留',
            '使用 env 文件区分不同的环境变量',
            '使用 RN 提供的 api 进行 px2dp 的换算',
          ]
        },
        {
          name: '其他',
          missions: [
            '修改 node 接口',
            '编写 python 数据迁移脚本',
          ],
        },
      ],
    },
    {
      company: '厦门蓝蕾软件科技有限公司',
      during: '2014年8月',
      post: '前端开发实习',
      homepage: 'jdxx.jd-dian.com/indexPC.html',
      projects: [
        {
          name: '官网首页, 移动端活动页',
          missions: ['使用 Sass, jQuery 编写页面'],
        },
      ],
    },
  ],
  skills: [
    '熟悉: React, Vue, jQuery, ES6, Git, Webpack, Sass, Postcss, GraphQL',
    '用过: Angular, rxjs, Vim, Nginx, Python, Rollup, Photoshop',
  ],
  brief: ['热爱敲代码', '喜欢新技术', '实现功能的同时考量对全局的影响', '轻度代码洁癖', '乐于尝试各种更好的实现方案'],
};
