import { useRouter } from "next/router";
import copy from "clipboard-copy";
import { GetServerSideProps, NextPage } from "next";

interface Props {
  snippetText: string;
  slug: string;
}

const CreateSnippet: NextPage<Props> = ({ snippetText, slug }) => {
  return (
    <div className="text-center">
      <h1 className="text-xl underline m-2">{slug}</h1>
      <div className="p-3">
        <button
          className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
          type="button"
          onClick={() => copy(snippetText)}
        >
          Copy Content
        </button>
      </div>

      <div>
        <textarea
          className="m-3 p-2 w-72 h-72"
          readOnly
          defaultValue={snippetText}
        />
      </div>

      <button
        className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded m-2"
        type="button"
        onClick={() => copy(window.location.toString())}
      >
        Copy Shareable Link
      </button>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async ({
  req,
  params,
}) => {
  // TODO: Move API logic directly into here
  const slug = params?.slug! as string;

  const response = await fetch(`http://${req.headers.host}/api/${slug}`);

  const snippetText = await response.text();

  return {
    props: { snippetText, slug },
  };
};

export default CreateSnippet;
