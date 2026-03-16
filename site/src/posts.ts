/** 文档源：origin/file 分支下的 .md 文件列表 */
export const RAW_BASE = 'https://raw.githubusercontent.com/lucian55/lucain55.github.io/file'

export const POST_FILES: string[] = [
  'ES6之Module.md', 'ES6入门.md', 'JS四种数据类型检测的方法.md',
  'JavaScript写的XSS攻击代码过滤模块.md', 'axios使用教程.md',
  'chrome谷歌浏览器一键清楚缓存插件.md', 'clipboard复制到剪贴板.md',
  'cookie.md', 'cookie的使用场景及方法.md', 'css 遇见单词空格自动换行的方法.md',
  'css3选择器.md', 'directors.md', 'directors客户端路由.md',
  'fiddler手机抓包.md', 'fiddler拦截.md', 'git打开慢的解决办法.md',
  'hello-world.md', 'hexo.md', 'hexo主题更换.md', 'hexo同步到git.md',
  'hexo基本使用.md', 'hexo的markdown文档中插入图片.md',
  'ie不打开开发者工具不加载js问题.md', 'javaScript代码规范.md',
  'jquery Sortable参数说明.md', 'js 监听浏览器后退事件.md', 'js中的偏移量.md',
  'js代码规范.md', 'js常用方法-持续更新.md', 'knockout.md', 'node之process.md',
  'php全攻略.md', 'react-DOM操作.md', 'react-echarts.md', 'react-jsx语法规范.md',
  'react-propTypes校验.md', 'react-基本使用.md', 'react-复合组件.md',
  'react-技巧.md', 'react-组件.md', 'sass.md', 'sass全攻略-安装及编译.md',
  'sass全攻略-语法.md', 'webpack配置说明.md',
  '使用 CSS 处理文本过长和意外超出的方法和技巧.md', '常用正则.md',
  '我遇到以及使用到的webpack插件.md', '有点意思的前端之 大白(●—●).md',
  '近期要写.md',
]

export function postUrl(file: string): string {
  return `${RAW_BASE}/${encodeURIComponent(file)}`
}

export function fileToSlug(file: string): string {
  // 使用原始标题作为路由参数，让 React Router 负责 URL 编码 / 解码
  return file.replace(/\.md$/i, '')
}

