import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'posts',
  description: 'read my posts.',
}

export default function Page() {
  return (
    <section>
      <BlogPosts />
    </section>
  )
}
