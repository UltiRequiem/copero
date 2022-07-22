import { useState } from "react";
import { useRouter } from "next/router";

import type { NextPage } from "next";

const saveSnippet = async (snippet: string) => {
  const response = await fetch("/api/post", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ snippet }),
  });

  const data: { slug: string } = await response.json();

  return data.slug;
};

const Index: NextPage = () => {
  const [snippet, setSnippet] = useState("");
  const router = useRouter();

  const publishSnippet = async () => {
    const slug = await saveSnippet(snippet);
    console.log("hey");
    router.push(slug);
  };

  return (
    <div className="text-center h-max">
      <p className="m-3 text-lg">
        Paste your text snippet in the text area below, save it, and share the
        link.
      </p>

      <textarea
        className="m-3 p-2 w-72 md:w-96 h-52 m:h-72 lg:h-96 lg:w-96"
        onChange={(event) => setSnippet(event.target.value)}
      />

      <div>
        <button
          type="button"
          className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          onClick={publishSnippet}
        >
          Save your Snippet
        </button>
      </div>
    </div>
  );
};

export default Index;
