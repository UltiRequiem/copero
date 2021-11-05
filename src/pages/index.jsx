import React from 'react';
import { useRouter } from 'next/router';

export default function CreateSnippet() {
  const [snippet, setSnippet] = React.useState('');
  const router = useRouter();

  const saveSnippet = async () => {
    const response = await fetch('/api/post', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ snippet }),
    });

    const parsedResponse = await response.json();
    router.push(`/${parsedResponse.slug}`);
  };

  return (
    <div>
      <h1>Upload your snippet</h1>
      <form
        onSubmit={(event) => {
          saveSnippet();
          event.preventDefault();
        }}
      >
        <label htmlFor="text">
          Paste your text snippet in the text area below, save it, and share the
          link.
        </label>

        <div>
          <textarea
            type="text"
            rows="20"
            cols="58"
            id="text"
            onChange={(event) => setSnippet(event.target.value)}
          />
        </div>
        <button type="submit">Save your snippet</button>
      </form>
    </div>
  );
}
