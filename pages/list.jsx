import React from 'react';

export default function ListSnippets({ snippetsData, host }) {
  return (
    <>
      <h1>All snippets</h1>

      {snippetsData.map((snippet) => (
        <div>
          <a href={`http://${host}/${snippet.slug}`}>
            Visit
            {' '}
            {snippet.slug}
          </a>
        </div>
      ))}
    </>
  );
}

// eslint-disable-next-line unicorn/prevent-abbreviations
export async function getServerSideProps({
  req: {
    headers: { host },
  },
}) {
  const response = await fetch(`http://${host}/api/list`);
  const parsedResponse = await response.json();

  const snippetsData = parsedResponse.map((item) => ({
    slug: item.slug,
  }));

  return {
    props: {
      snippetsData,
      host,
    },
  };
}
