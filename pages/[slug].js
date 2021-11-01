import React from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

import Image from 'next/image';
import { useRouter } from 'next/router';

import copy from 'clipboard-copy';

export default function CreateSnippet({ snippetText, slug }) {
  const router = useRouter();

  if (!snippetText) {
    return (
      <>
        <div className="mt-4">
          <h1>There is nothing here yet</h1>
        </div>

        <div className="mt-4">
          <Image
            src="/404.jpeg"
            alt="Picture of the author"
            width={360}
            height={360}
          />
        </div>

        <div className="mt-1">
          <Button onClick={() => router.push('/')} variant="outline-info">
            Return Home
          </Button>
        </div>
      </>
    );
  }

  return (
    <div className="text-center mt-4">
      <h1>Snippet</h1>
      <Button
        onClick={() => copy(window.location)}
        className="mb-4 mt-2 mr-1"
        variant="outline-info"
      >
        Copy Link to Clipboard
      </Button>
      &nbsp; &nbsp;
      <Button
        onClick={() => router.push(`/api/${slug}`)}
        className="mb-4 mt-2"
        variant="outline-info"
      >
        Raw Text
      </Button>
      <Form>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Control
            style={{
              margin: '0 auto',
              width: '80%',
              height: '300px',
            }}
            disabled
            value={snippetText}
            as="textarea"
            rows={3}
          />
        </Form.Group>
      </Form>
      <Alert className="mt-4" variant="info">
        Done successfully
      </Alert>
    </div>
  );
}

export async function getServerSideProps({ req, params: { slug } }) {
  const response = await fetch(`http://${req.headers.host}/api/${slug}`);
  console.log(response);
  const snippetObject = await response.json();

  if (!snippetObject) {
    return { props: {} };
  }

  return {
    props: {
      snippetText: snippetObject.snippet,
      slug,
    },
  };
}
