import Link from "next/link";
import { formatDate, getBlogPosts } from "app/blog/utils";

export function BlogPosts() {
  let allBlogs = getBlogPosts();

  return (
    <div className="space-y-4">
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="block group"
            href={`/blog/${post.slug}`}
          >
            <div className="flex flex-col space-y-1">
              <div className="flex items-center space-x-2">
                <p className="text-sm text-neutral-400">
                  {formatDate(post.metadata.publishedAt, false)}
                </p>
                <span className="text-neutral-400">·</span>
                <h2 className="text-neutral-100 group-hover:text-neutral-400 transition-colors">
                  {post.metadata.title}
                </h2>
              </div>
              {post.metadata.summary && (
                <p className="text-sm text-neutral-400">
                  {post.metadata.summary}
                </p>
              )}
            </div>
          </Link>
        ))}
    </div>
  );
}
