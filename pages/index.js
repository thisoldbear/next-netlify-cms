import { Component } from "react";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";

export async function getServerSideProps() {
  let frontmatter = "";

  try {
    const md = await import(`../content/home.md`);
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

const Home = ({ data, content }) => {
  const meta = JSON.parse(data);

  return (
    <>
      <article>
        <h1>{meta?.title}</h1>
        <ReactMarkdown>{content}</ReactMarkdown>
        <ul>
          {meta?.cats?.map((cat, k) => (
            <li key={k}>
              <h2>{cat.name}</h2>
              <p>{cat.description}</p>
            </li>
          ))}
        </ul>
      </article>
    </>
  );
};

export default Home;
