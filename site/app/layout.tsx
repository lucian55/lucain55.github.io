import type { ReactNode } from 'react'
import { Layout } from '../components/Layout'
import './globals.css'

export const metadata = {
  title: 'lucian 的博客',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="zh-CN">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}

