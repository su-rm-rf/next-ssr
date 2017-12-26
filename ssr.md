Server Side Render

### 特性

    服务端渲染（默认）
    自动代码切割，加速页面加载
    简单的客户端路由（基于页面）
    基于webpack的开发环境，支持HMR热更新
    可以用express或其他nodejs http服务实现
    可以自定义babel和webpack的配置

### 使用

    页面跳转: Link(href=xxx) a
    公用组件: Header, Layout
    查询参数: props.url.query.xxx
    路径变量: Link(as=xxx)
    定制服务API: express + next
    获取数据：fetch
        刷新: ssr
        直接点击: csr
    样式: styled-jsx
        内嵌组件，必须内嵌写样式
        全局样式: global
        markdown样式
    发布:
        next build
        node ./server.js