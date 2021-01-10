import { BlogLinkExternal } from "@components/BlogComponents";
import { useRouter } from "next/router";

export default function Blog() {
  const router = useRouter();
  const url = "https://avif.io" + router.pathname;
  return (
    <div className="share-container">
      <BlogLinkExternal
        link={`https://twitter.com/intent/tweet?source=${url}&text=${url}`}
        aria="Share on Twitter"
        id="twitter"
      />
      <BlogLinkExternal
        link={`https://www.reddit.com/submit?url=${url}`}
        aria="Share on Reddit"
        id="reddit"
      />
      <BlogLinkExternal
        link={`https://www.facebook.com/share.php?u=${url}`}
        aria="Share on Facebook"
        id="facebook"
      />
    </div>
  );
}
