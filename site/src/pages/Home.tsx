import { List, Card } from 'antd'
import { Link } from 'react-router-dom'
import { POST_FILES, fileToSlug } from '../posts'

function titleFromFile(file: string): string {
  return file.replace(/\.md$/i, '')
}

export default function Home() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">文章列表</h1>
      <List
        grid={{ gutter: 12, xs: 1, sm: 1, md: 2 }}
        dataSource={POST_FILES}
        renderItem={(file) => {
          const slug = fileToSlug(file)
          const title = titleFromFile(file)
          return (
            <List.Item>
              <Link to={`/post/${slug}`} className="block">
                <Card hoverable className="h-full">
                  <span className="text-gray-900">{title}</span>
                </Card>
              </Link>
            </List.Item>
          )
        }}
      />
    </div>
  )
}
