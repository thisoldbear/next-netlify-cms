import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";

export async function getServerSideProps({ ...ctx }) {
  const { slug } = ctx.params;

  let frontmatter = "";

  try {
    const md = await import(`../../content/blog/${slug}.md`);
    frontmatter = md.default;
  } catch (err) {
    return {
      notFound: true,
    };
  }

  // Parse
  const data = matter(frontmatter);

  // Fallback if there is no content in the markdown
  if (!data.content) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      content: data.content,
      data: JSON.stringify(data.data), // Stringify to serialize date
    },
  };
}

const Slug = ({ data, content }) => {
  const router = useRouter();

  const meta = JSON.parse(data);

  let Template;

  if (router.query.pid === "blog") {
    Template = dynamic(() => import("../../components/Post"));
  } else {
    Template = dynamic(() => import("../../components/FallbackTemplate"));
  }

  return (
    <div>
      <Template>
        <h1>{meta?.name}</h1>
        <ReactMarkdown>{content}</ReactMarkdown>
      </Template>
    </div>
  );
};

export default Slug;
