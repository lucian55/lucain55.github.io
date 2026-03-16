import Link from 'next/link'
import { POST_FILES, fileToSlug } from '../posts'

function titleFromFile(file: string): string {
  return file.replace(/\.md$/i, '')
}

export default function Home() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">文章列表</h1>
      <div className="grid gap-3 sm:grid-cols-1 md:grid-cols-2">
        {POST_FILES.map((file) => {
          const slug = fileToSlug(file)
          const title = titleFromFile(file)
          return (
            <Link
              key={file}
              href={`/post/${slug}`}
              className="block rounded border border-slate-200 bg-white px-4 py-3 hover:border-slate-400 hover:shadow-sm transition"
            >
              <span className="text-gray-900">{title}</span>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
