import Post from '../../../src/pages/Post'
import { POST_FILES, fileToSlug } from '../../../src/posts'

export function generateStaticParams() {
  return POST_FILES.map((file) => ({
    slug: fileToSlug(file),
  }))
}

export default function PostPage() {
  return <Post />
}

