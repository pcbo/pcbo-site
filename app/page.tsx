import Image from 'next/image'
import { BlogPosts } from 'app/components/posts'
import pfpImage from './pug.png'

export default function Page() {
  return (
    <section>
      <div className="flex items-center mb-8">
        <Image
          src={pfpImage}
          alt="Your Name"
          width={48}
          height={48}
          className="rounded-full mr-4"
        />
        <h1 className="text-2xl font-semibold tracking-tighter">gm 🫡</h1>
      </div>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}