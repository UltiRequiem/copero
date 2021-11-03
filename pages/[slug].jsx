import React from 'react';
import PropTypes from 'prop-types';

import Image from 'next/image';
import { useRouter } from 'next/router';

import copy from 'clipboard-copy';
import { isJSON } from '../utils.js';

export default function CreateSnippet({ snippetText, slug, notExist = false }) {
  const router = useRouter();

  if (notExist) {
    return (
      <>
        <div>
          <h1>There is nothing here yet</h1>
        </div>

        <div>
          <Image
            src="/404.jpeg"
            alt="Picture of the author"
            width={360}
            height={360}
          />
        </div>

        <div>
          <button
            type="button"
            onClick={() => router.push('/')}
            variant="outline-info"
          >
            Return Home
          </button>
        </div>
      </>
    );
  }

  return (
    <div>
      <h1>Snippet</h1>
      <button
        type="button"
        onClick={() => copy(window.location)}
        variant="outline-info"
      >
        Copy Link to Clipboard
      </button>
      <button
        type="button"
        onClick={() => router.push(`/api/${slug}`)}
        variant="outline-info"
      >
        Raw Text
      </button>

      <textarea name="awesome">{snippetText}</textarea>
    </div>
  );
}

CreateSnippet.propTypes = {
  snippetText: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  notExist: PropTypes.bool,
};

CreateSnippet.defaultProps = {
  notExist: false,
};

// eslint-disable-next-line unicorn/prevent-abbreviations
export async function getServerSideProps({ req: request, params: { slug } }) {
  const response = await fetch(`http://${request.headers.host}/api/${slug}`);
  const parsedResponse = await response.text();

  if (isJSON(parsedResponse)) {
    return { props: { notExist: true } };
  }

  return {
    props: {
      snippetText: parsedResponse,
      slug,
    },
  };
}
