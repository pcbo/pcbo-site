import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        gm 🫡
      </h1>
      <p className="mb-4">
        {`​on a mission to help the next generation of builders succeed. ​this site is a log to keep myself publicly accountable.`​}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
