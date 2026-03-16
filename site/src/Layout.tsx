import { Outlet, Link, useLocation } from 'react-router-dom'
import { Layout as AntLayout, Menu } from 'antd'
import { HomeOutlined, UserOutlined } from '@ant-design/icons'

const { Header, Content } = AntLayout

export default function Layout() {
  const location = useLocation()
  const items = [
    { key: '/', icon: <HomeOutlined />, label: <Link to="/">首页</Link> },
    { key: '/about', icon: <UserOutlined />, label: <Link to="/about">关于 / 赞助</Link> },
  ]
  const selected = location.pathname === '/about' ? '/about' : '/'

  return (
    <AntLayout className="min-h-screen">
      <Header className="flex items-center bg-slate-800 px-4">
        <Link to="/" className="text-white font-semibold text-lg mr-8 no-underline">
          lucian 的博客
        </Link>
        <Menu
          theme="dark"
          mode="horizontal"
          selectedKeys={[selected]}
          items={items}
          className="min-w-0 flex-1 border-0 bg-transparent"
          style={{ lineHeight: '64px' }}
        />
      </Header>
      <Content className="max-w-4xl mx-auto w-full px-4 py-6">
        <Outlet />
      </Content>
    </AntLayout>
  )
}
