const html5Sidebar = require("./sidebars/html5");
const css3Sidebar = require("./sidebars/css3");
const es6Sidebar = require("./sidebars/es6");
const vueSidebar = require("./sidebars/vue");
const reactSidebar = require("./sidebars/react");
const bootstrapSidebar = require("./sidebars/bootstrap");
const jQuerySidebar = require("./sidebars/jQuery");
const communicationProtocolSidebar = require("./sidebars/communication-protocol");
const apiStyleSidebar = require("./sidebars/api-style");
const performanceIndexSidebar = require("./sidebars/performance-index");
const evaluationToolsSidebar = require("./sidebars/evaluation-tools");

module.exports = {
  title: "test",
  description: "李杨",
  head: [
    ["link", { rel: "icon", href: "/meta.png" }], // 配置html页面meta的图标
  ],
  plugins: ["@vuepress/back-to-top"], //  配置回到顶部的插件
  // markdown: {
  //   config: md => {
  //     md.use(require('markdown-it-xxx'))
  //   }
  // },
  themeConfig: {
    nav: [
      { text: "首页", link: "/" },
      {
        text: "编程基础",
        items: [
          { text: "HTML(5)", link: "/html5/" },
          { text: "CSS(3)", link: "/css3/" },
          { text: "JavaScript(ES6+)", link: "/es6/" },
        ],
      },
      {
        text: "类库框架",
        items: [
          {
            text: "工具库",
            items: [
              { text: "Bootstrap", link: "/bootstrap/" },
              { text: "jQuery", link: "/jQuery/" },
            ],
          },
          {
            text: "开发库/框架",
            items: [
              { text: "Vue", link: "/vue/" },
              { text: "React", link: "/react/" },
            ],
          },
        ],
      },
      {
        text: "知识进阶",
        items: [
          {
            text: "网络通信",
            items: [
              { text: "通信协议", link: "/communication-protocol/" },
              { text: "API风格", link: "/api-style/" },
            ],
          },
          {
            text: "性能",
            items: [
              { text: "性能指标", link: "/performance-index/" },
              { text: "评估工具", link: "/evaluation-tools/" },
            ],
          },
          { text: "安全", link: "/" },
          { text: "浏览器", link: "/" },
        ],
      },
      {
        text: "工程开发",
        items: [
          { text: "模块化", link: "/" },
          { text: "版本管理", link: "/" },
          { text: "语言增强", link: "/" },
          { text: "构建工具", link: "/" },
          { text: "转换器", link: "/" },
          { text: "CI/CD", link: "/" },
          { text: "代码质量", link: "/" },
        ],
      },
      {
        text: "编程思想",
        items: [
          { text: "设计模式", link: "/" },
          { text: "架构模式", link: "/" },
          { text: "编程泛型", link: "/" },
          { text: "程序设计", link: "/" },
        ],
      },
      {
        text: "领域分支",
        items: [
          { text: "可视化", link: "/" },
          { text: "移动Web", link: "/" },
          { text: "游戏开发", link: "/" },
          { text: "便携式设备", link: "/" },
        ],
      },
      {
        text: "计算机基础",
        items: [
          { text: "编译原理", link: "/" },
          { text: "数据结构", link: "/" },
          { text: "算法", link: "/" },
          { text: "操作系统", link: "/" },
          { text: "计算机网络", link: "/" },
        ],
      },
      {
        text: "后端知识",
        items: [
          { text: "Node", link: "/" },
          { text: "编程语言", link: "/" },
          { text: "网页服务器", link: "/" },
          { text: "数据库", link: "/" },
          { text: "数据缓存", link: "/" },
        ],
      },
      {
        text: "其他",
        items: [
          {
            text: "开发软件",
            items: [
              { text: "编辑器和IDE", link: "/" },
              { text: "调试工具", link: "/" },
              { text: "切图", link: "/" },
            ],
          },
          {
            text: "社区发展",
            items: [
              { text: "SSR", link: "/" },
              { text: "大前端", link: "/" },
              { text: "微服务", link: "/" },
              { text: "Serverless", link: "/" },
              { text: "WebAssembly", link: "/" },
              { text: "Less code/No code", link: "/" },
            ],
          },
          {
            text: "软技能",
            items: [
              { text: "学习能力", link: "/" },
              { text: "技术能力", link: "/" },
              { text: "团队协作", link: "/" },
              { text: "项目管理", link: "/" },
              { text: "人员管理", link: "/" },
              { text: "架构设计能力", link: "/" },
            ],
          },
        ],
      },
    ],
    sidebar: {
      "/html5/": html5Sidebar,
      "/css3/": css3Sidebar,
      "/es6/": es6Sidebar,
      "/vue/": vueSidebar,
      "/react/": reactSidebar,
      "/bootstrap/": bootstrapSidebar,
      "/jQuery/": jQuerySidebar,
      "/communicationProtocol/": communicationProtocolSidebar,
      "/apiStyle/": apiStyleSidebar,
      "/performance-index/": performanceIndexSidebar,
      "/evaluation-tools/": evaluationToolsSidebar,
    },
  },
};
