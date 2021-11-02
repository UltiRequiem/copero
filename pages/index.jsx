import React from 'react';
import { Form, Button } from 'react-bootstrap';
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
    <div className="text-center mt-5">
      <h1>Upload your snippet</h1>
      <p>
        Paste your text snippet in the text area below, save it, and share the
        link.
      </p>

      <Form>
        <Form.Group className="mb-2 pt-4">
          <Form.Control
            style={{ width: '100%', height: '15em', margin: '0 auto' }}
            as="textarea"
            rows={3}
            onChange={(event) => setSnippet(event.target.value)}
          />
        </Form.Group>

        <Button onClick={saveSnippet} variant="outline-info">
          Save your snippet
        </Button>
      </Form>
    </div>
  );
}
