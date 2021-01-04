import Blog from "@components/Blog";
import {
  BlogSubtitle,
  BlogAdvantages,
  BlogSyntax,
  BlogNote,
  BlogLink,
} from "@components/BlogComponents";
import CTA from "@components/CTA";
const postdata = {
  readingtime: "",
  title: "Why you should convert your JPG to AVIF",
  description: "",
  url: "https://avif.io/blog/wip-avif-vs-jpg/",
  image: "",
  keywords: [""],
  author: "Justin Schmitz",
  data_published: "22.10.20",
  date_modified: "22.12.20",
  sources: [""],
  tags: [""],
  questions: [""],
};

const posts = [
  {
    url: "",
    title: "",
    date_modified: "",
    description: "",
  },
  {
    url: "",
    title: "",
    date_modified: "",
    description: "",
  },
  {
    url: "",
    title: "",
    date_modified: "",
    description: "",
  },
];

const advantages = ["", ""];

export default function BlogAvif() {
  return (
    <Blog postdata={postdata} posts={posts}>
      <BlogSubtitle text="JPG" />
      <BlogSubtitle text="AVIF" />
      <BlogSubtitle text="Why should I convert JPG to AVIF?" />
      <BlogSubtitle text="How can I convert JPG to AVIF?" />
      <CTA />
    </Blog>
  );
}