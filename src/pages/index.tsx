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
    <div className="p-2 bg-slate-400 h-screen w-screen flex flex-col items-center">
      <h1 className="text-3xl font-bold underline">Upload your Snippet</h1>

      <textarea
        className="m-5 w-10/12 h-3/6 p-2"
        onChange={(event) => setSnippet(event.target.value)}
      />

      <button
        className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        onClick={publishSnippet}
      >
        Save your Snippet
      </button>
    </div>
  );
};

export default Index;
