import { AllBlogPosts } from "app/components/posts";
import Link from "next/link";

export const metadata = {
  title: "posts",
  description: "read my posts.",
};

export default function Page() {
  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">All Posts</h1>
        <Link
          href="/"
          className="text-sm text-neutral-400 hover:text-neutral-300 transition-colors"
        >
          ← Back home
        </Link>
      </div>
      <AllBlogPosts />
    </section>
  );
}
