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
    <div className="text-center">
      <div className="p-3">
        <button
          className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded m-2"
          type="button"
          onClick={() => copy(window.location.toString())}
        >
          Copy Link to Clipboard
        </button>

        <button
          className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
          type="button"
          onClick={() => router.push(`/api/${slug}`)}
        >
          Raw Text
        </button>
      </div>

      <div>
        <textarea
          className="m-3 p-2 w-72 md:w-96 h-52 m:h-72 lg:h-96 lg:w-96"
          readOnly
          defaultValue={snippetText}
        />
      </div>
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
