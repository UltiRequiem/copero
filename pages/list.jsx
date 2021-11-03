import React from 'react';

export default function ListSnippets({ slugs, host }) {
  return (
    <>
      <h1>All snippets</h1>

      {slugs.map((slug) => (
        <div>
          <a href={`http://${host}/${slug}`}>
            Visit
            {' '}
            {slug}
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
  const response = await fetch(`http://${host}/api/all?only=slug`);
  const slugs = await response.json();

  return {
    props: {
      snippetsData: slugs,
      host,
    },
  };
}
