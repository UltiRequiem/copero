import { useRouter } from "next/router";
import copy from "clipboard-copy";

export default function CreateSnippet({ snippetText, slug }) {
  const router = useRouter();

  return (
    <>
      <h1>Snippet</h1>
      <button type="button" onClick={() => copy(window.location)}>
        Copy Link to Clipboard
      </button>
      <button type="button" onClick={() => router.push(`/api/${slug}`)}>
        Raw Text
      </button>
      <div>
        <textarea readOnly defaultValue={snippetText} rows="20" cols="58" />
      </div>
    </>
  );
}

export async function getServerSideProps({ req: request, params: { slug } }) {
  const response = await fetch(`http://${request.headers.host}/api/${slug}`);

  const snippetText = await response.text();

  return {
    props: { snippetText, slug },
  };
}
