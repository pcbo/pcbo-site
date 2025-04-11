import Link from "next/link";
import { formatDate, getBlogPosts } from "app/blog/utils";

function truncateSummary(summary: string, maxLength: number = 40): string {
  if (summary.length <= maxLength) return summary;

  // Find the last space before maxLength
  const lastSpace = summary.lastIndexOf(" ", maxLength);

  // If we found a space, cut there, otherwise show the complete word
  return lastSpace > 0 ? summary.substring(0, lastSpace) + "..." : summary;
}

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
        .slice(0, 4)
        .map((post) => (
          <Link
            key={post.slug}
            className="block group"
            href={`/blog/${post.slug}`}
          >
            <div className="flex flex-col">
              <p className="text-xs text-neutral-400">
                {formatDate(post.metadata.publishedAt, false)}
              </p>
              <h2 className="text-neutral-100 group-hover:text-neutral-300 transition-colors">
                {post.metadata.title}
              </h2>
              {post.metadata.summary && (
                <p className="text-sm text-neutral-400 mt-1">
                  {truncateSummary(post.metadata.summary)}
                </p>
              )}
            </div>
          </Link>
        ))}
    </div>
  );
}
