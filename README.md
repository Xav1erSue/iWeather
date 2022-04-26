# :cloud: iWeather - 一个天气app

### :page_with_curl: 项目简介

---

使用`vite` + `Vue3.2` + `Vuex`

更新日志: V1.5 修复字体显示bug

预览网站（仅支持移动端）：[iWeather](https://iweather.xav1er.com/)

:iphone:**目前仅支持手机端**

### :construction: 基本功能

---

1. 显示实时天气
2. 显示未来天气概览
3. 显示未来15天天气预报
4. 查找世界范围内的地区天气
5. 查询记录

### :volcano: 项目结构

---

```
┌── dist                        # 项目打包构建后的输出目录
├── node_modules                # npm外部包目录
├── public                      # 公共资源储存目录
│   ├── logo                      # 设计logo
│   ├── weatherIcons              # 天气图标
│   └── favicon.ico               # 网页图标
├── src                         # 项目代码目录
│   ├── assets                    # 静态资源存储目录
│   │	└── FangZhe...Ti-1.ttf        # 依赖字体
│   ├── components                # 全局组件目录
│   │	├── ChooseCity.vue            # 选择城市组件
│   │	├── Details.vue               # 详细信息组件
│   │	├── ForecastCard.vue          # 15日预报卡片组件
│   │	├── MainCard.vue              # 主卡天气信息组件
│   │	└── TopBar.vue                # 顶栏组件
│   ├── store                     # store目录
│   │   └── index.js                # store的入口文件
│   ├── utils                     # 抽离封装的公共方法
│   │	├── formatTool.js             # 转译星期文本
│   │	├── getLocation.js            # 浏览器获取定位方法
│   │	├── judge.js                  # 天气信息翻译中文和判定aqi对应颜色
│   │	├── Normalize.js              # 标准化天气预报信息方法
│   │	└── storage.js                # 封装localstorage方法
│   ├── App.vue                   # 入口vue文件
│   ├── api.js                    # 封装http请求
│   └── main.js                   # 项目入口js文件
├── index.html                  # 项目预置入口html文件
├── vite.config.js              # vite配置文件
├── windi.config.js             # windicss配置文件
├── package-lock.json           # 项目依赖和配置文件（lock）
├── package.json                # 项目依赖和配置文件
└── README.md                   # 项目简介
```

### :clapper: 运行环境参考

---

本地开发环境：`Npm 8.1.0`

云端部署环境：`nginx/1.14.1`

### :hammer: 本地调试

---

```bash
npm run dev
```

### :cyclone: 构建项目

---

```bash
npm run build
```









