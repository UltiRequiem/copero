import { useRouter } from "next/router";
import copy from "clipboard-copy";
import { GetServerSideProps, NextPage } from "next";

interface Props {
  snippetText: string;
  slug: string;
}

const CreateSnippet: NextPage<Props> = ({ snippetText, slug }) => {
  const router = useRouter();

  return (
    <>
      <h1>Snippet</h1>
      <button type="button" onClick={() => copy(window.location.toString())}>
        Copy Link to Clipboard
      </button>
      <button type="button" onClick={() => router.push(`/api/${slug}`)}>
        Raw Text
      </button>
      <div>
        <textarea readOnly defaultValue={snippetText} rows={20} cols={58} />
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async ({
  req,
  params: { slug },
}) => {
  const response = await fetch(`http://${req.headers.host}/api/${slug}`);

  const snippetText = await response.text();

  return {
    props: { snippetText, slug },
  };
};

export default CreateSnippet;
