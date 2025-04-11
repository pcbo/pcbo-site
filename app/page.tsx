import Image from "next/image";
import { BlogPosts } from "app/components/posts";
import pfpImage from "./pug.png";

export default function Page() {
  return (
    <section>
      <div className="flex items-center mb-12">
        <Image
          src={pfpImage}
          alt="thug pug pcbo pfp"
          width={64}
          height={64}
          className="rounded-full mr-4"
        />
        <h1 className="text-3xl font-bold tracking-tighter">gm</h1>
      </div>
      <div className="mt-8">
        <BlogPosts />
      </div>
    </section>
  );
}
