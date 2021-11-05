import React from 'react';
import PropTypes from 'prop-types';

import { useRouter } from 'next/router';

import copy from 'clipboard-copy';
import { isJSON } from '../utils';

export default function CreateSnippet({ snippetText, slug }) {
  const router = useRouter();
  return (
    <div>
      <h1>Snippet</h1>
      <button type="button" onClick={() => copy(window.location)}>
        Copy Link to Clipboard
      </button>
      <button type="button" onClick={() => router.push(`/api/${slug}`)}>
        Raw Text
      </button>
      <div>
        <textarea defaultValue={snippetText} rows="20" cols="58" />
      </div>
    </div>
  );
}

CreateSnippet.propTypes = {
  snippetText: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
};

// eslint-disable-next-line unicorn/prevent-abbreviations
export async function getServerSideProps({ req: request, params: { slug } }) {
  const response = await fetch(`http://${request.headers.host}/api/${slug}`);
  const parsedResponse = await response.text();

  if (isJSON(parsedResponse)) {
    return {
      redirect: {
        destination: '/404',
        permanent: false,
      },
    };
  }

  return {
    props: {
      snippetText: parsedResponse,
      slug,
    },
  };
}
