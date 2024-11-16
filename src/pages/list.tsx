import { GetServerSideProps, NextPage } from "next";
import { DBService } from "../services";
import Link from 'next/link'


interface Props {
	snippet: string,
	slug: string
}

const ListPage: NextPage<Props[]> = ({snippets}) => {
	console.log(snippets)
  return (
    <div className="text-center">
      <h1 className="text-xl underline m-2">Hello Friends!</h1>
	  <p>There are {snippets.length} public snippets.</p>
	  <div></div>
	  {snippets.map(snippet =>{
		// eslint-disable-next-line react/jsx-key
		return  <div>
					<Link href={`/${snippet.slug}`}>{snippet.slug}</Link>
		</div>
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
