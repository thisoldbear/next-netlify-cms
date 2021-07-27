import dynamic from "next/dynamic";
import { useRouter } from "next/router";

const Page = () => {
  const router = useRouter();

  let Template;

  if (router.query.pid === "blog") {
    Template = dynamic(() => import("../../components/Post"));
  } else {
    Template = dynamic(() => import("../../components/FallbackTemplate"));
  }

  return (
    <div>
      <Template>
        <h1>Page</h1>
      </Template>
    </div>
  );
};

export default Page;
