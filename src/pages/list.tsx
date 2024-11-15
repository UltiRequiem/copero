import copy from "clipboard-copy";
import { GetServerSideProps, NextPage } from "next";
import { DBService } from "../services";

interface Props {
	snippet: string,
	slug: string
}

const ListPage: NextPage<Props[]> = ({snippets}) => {
	console.log(snippets)
  return (
    <div className="text-center">
      <h1 className="text-xl underline m-2">Hello Friends!</h1>
	  {snippets.map(snippet =>{
		return <div>{snippet.slug}</div>
	  })}

    </div>
  );
};

export const getServerSideProps: GetServerSideProps<Props[]> = async () => {
	// https://github.com/vercel/next.js/issues/11993
	const data = await DBService.publicSnippets();
	const snippets = JSON.parse(JSON.stringify(data))

  return {
    props: {snippets},
  };
};

export default ListPage;
