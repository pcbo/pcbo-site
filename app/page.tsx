import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Welcome to PCBO's building in public:
      </h1>
      <p className="mb-4">
        {`​I'm on a mission to help the next gen of builders succeed. Currently doing that as CEO of Talent Protocol. Tours of duty include: internships, dev, research work, leading product and tech, and founder. Pedro is a fan of: stargate, star trek, total war, and dune.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
