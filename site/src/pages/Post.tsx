import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Spin, Result, Button } from 'antd'
import ReactMarkdown from 'react-markdown'
import { postUrl, POST_FILES, fileToSlug } from '../posts'

export default function Post() {
  const { slug } = useParams<{ slug: string }>()
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
      <Result status="404" title="缺少文章 ID" extra={<Link to="/"><Button type="primary">返回首页</Button></Link>} />
    )
  }

  if (!exists) {
    return (
      <Result status="404" title="文章不存在" extra={<Link to="/"><Button type="primary">返回首页</Button></Link>} />
    )
  }

  if (loading) {
    return (
      <div className="flex justify-center py-12">
        <Spin size="large" />
      </div>
    )
  }

  if (error) {
    return (
      <Result status="error" title={error} extra={<Link to="/"><Button type="primary">返回首页</Button></Link>} />
    )
  }

  const title = file.replace(/\.md$/i, '')
  return (
    <article className="py-4">
      <Link to="/" className="text-blue-600 hover:underline mb-4 inline-block">← 返回首页</Link>
      <h1 className="text-2xl font-bold mb-4">{title}</h1>
      <div className="markdown-body">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </article>
  )
}
