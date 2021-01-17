import { BlogLink, BlogLinkExternal } from "./BlogComponents";
import { conversions } from "../lib/conversions";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div id="footer-info">
          <div className="s2 f2">
            <b>avif.io</b>
          </div>
          <div className="s2 text-80">
            A tool by Justin Schmitz and Niksa Sporin that has already converted {conversions}{" "}
            files.
          </div>
          <div>© 2020 avif.io</div>
        </div>
        <div id="footer-more">
          <div className="s1">
            <b>More</b>
          </div>
          <BlogLink text="Blog" link="/blog" newLine />
          <BlogLinkExternal text="Contact" link="mailto:support@avif.io" newLine />
          <BlogLinkExternal
            text="Donate"
            link="https://www.buymeacoffee.com/justinschmitz"
            newLine
          />
          <BlogLink text="Legal & Privacy" link="/privacy-policy" newLine />
        </div>
        <div id="communication">
          <a
            className="producthunt"
            href="https://www.producthunt.com/posts/avif-io-avif-image-converter?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-avif-io-avif-image-converter"
            target="_blank"
            rel="noreferrer">
            <img
              src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=273434&theme=dark"
              alt="✨ avif.io | Fastest AVIF image converter - Convert images to AVIF for free. No data sent, it's magic!✨ | Product Hunt"
              style={{ width: 250, height: 54 }}
              width="250"
              height="54"
            />
          </a>
          <a
            className="discord white"
            href="https://discord.gg/6w42YpF5hm"
            target="_blank"
            rel="noreferrer">
            Talk to us on Discord!
          </a>
        </div>
      </div>
    </>
  );
}
