 'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import ReactMarkdown from 'react-markdown'
import { postUrl, POST_FILES, fileToSlug } from '../posts'

export default function Post() {
  const params = useParams<{ slug: string }>()
  const slug = params?.slug
  const [content, setContent] = useState<string>('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const file = slug ? POST_FILES.find((f) => fileToSlug(f) === slug) ?? '' : ''
  const exists = Boolean(file)

  useEffect(() => {
    if (!file || !exists) {
      setLoading(false)
      setError(exists ? null : '文章不存在')
      return
    }
    setLoading(true)
    setError(null)
    fetch(postUrl(file))
      .then((r) => {
        if (!r.ok) throw new Error(r.statusText)
        return r.text()
      })
      .then(setContent)
      .catch(() => setError('加载失败'))
      .finally(() => setLoading(false))
  }, [file, exists])

  if (!slug) {
    return (
      <div className="py-8 text-center">
        <p className="text-lg mb-4">缺少文章 ID</p>
        <Link href="/" className="text-blue-600 hover:underline">返回首页</Link>
      </div>
    )
  }

  if (!exists) {
    return (
      <div className="py-8 text-center">
        <p className="text-lg mb-4">文章不存在</p>
        <Link href="/" className="text-blue-600 hover:underline">返回首页</Link>
      </div>
    )
  }

  if (loading) {
    return (
      <div className="flex justify-center py-12">
        <span className="text-gray-600">加载中...</span>
      </div>
    )
  }

  if (error) {
    return (
      <div className="py-8 text-center">
        <p className="text-lg mb-4">{error}</p>
        <Link href="/" className="text-blue-600 hover:underline">返回首页</Link>
      </div>
    )
  }

  const title = file.replace(/\.md$/i, '')
  return (
    <article className="py-4">
      <Link href="/" className="text-blue-600 hover:underline mb-4 inline-block">← 返回首页</Link>
      <h1 className="text-2xl font-bold mb-4">{title}</h1>
      <div className="markdown-body">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </article>
  )
}
