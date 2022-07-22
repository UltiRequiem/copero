import React from "react";
import PropTypes from "prop-types";

import { Centerizador, ItemList, List, ListContainer } from "../styles";

export default function ListSnippets({ slugs, host }) {
  return (
    <Centerizador>
      <ListContainer>
        <h1>All snippets</h1>
        {slugs.map((slug) => (
          <List>
            <ItemList key={slug}>
              <a href={`http://${host}/${slug}`}>
                Visit {slug}
              </a>
            </ItemList>
          </List>
        ))}
      </ListContainer>
    </Centerizador>
  );
}

ListSnippets.propTypes = {
  slugs: PropTypes.arrayOf(PropTypes.string).isRequired,
  host: PropTypes.string.isRequired,
};

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
      slugs,
      host,
    },
  };
}
