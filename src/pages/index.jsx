import React from 'react';
import { useRouter } from 'next/router';

export default function CreateSnippet() {
  const [snippet, setSnippet] = React.useState('');
  const router = useRouter();

  const saveSnippet = async () => {
    console.log(JSON.stringify({ snippet }));
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
      <p>
        Paste your text snippet in the text area below, save it, and share the
        link.
      </p>

      <form action="/api/post">
        <input
          style={{ width: '100%', height: '18em', margin: '0 auto' }}
          onChange={(event) => setSnippet(event.target.value)}
        />
        <button type="button" onClick={saveSnippet}>
          Save your snippet
        </button>
      </form>
    </div>
  );
}
