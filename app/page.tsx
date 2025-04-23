import Link from "next/link";
import { BlogPosts } from "app/components/posts";
import Image from "next/image";
import pfpImage from "./pug.png";
import TimeGreeting from "./components/TimeGreeting";

export default function Page() {
  return (
    <section>
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <Image
            src={pfpImage}
            alt="thug pug pcbo pfp"
            width={64}
            height={64}
            className="rounded-full mr-4"
          />
          <div>
            <TimeGreeting />
          </div>
        </div>
      </div>
      <p className="text-neutral-600 dark:text-neutral-400 mb-12 max-w-xl text-sm">
        3-time founder (1 exit). Building Talent Protocol to help builders prove
        their reputation onchain. 10+ years in HR tech, still shipping.
      </p>
      <div className="mt-8">
        <BlogPosts />
      </div>
    </section>
  );
}
