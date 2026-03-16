'use client'

import { ReactNode } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function Layout({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  const isAbout = pathname === '/about'

  return (
    <div className="min-h-screen flex flex-col bg-slate-900">
      <header className="flex items-center px-4 h-16 bg-slate-800 text-white">
        <Link href="/" className="font-semibold text-lg mr-8 no-underline">
          lucian 的博客
        </Link>
        <nav className="flex gap-4 text-sm">
          <Link
            href="/"
            className={`hover:text-white ${!isAbout ? 'text-white' : 'text-slate-300'}`}
          >
            首页
          </Link>
          <Link
            href="/about"
            className={`hover:text-white ${isAbout ? 'text-white' : 'text-slate-300'}`}
          >
            关于 / 赞助
          </Link>
        </nav>
      </header>
      <main className="flex-1 max-w-4xl mx-auto w-full px-4 py-6 bg-white">
        {children}
      </main>
    </div>
  )
}

