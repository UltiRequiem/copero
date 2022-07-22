import Link from "next/link";

export function Header() {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span>
          <img
            className="fill-current h-8 w-8 mr-2"
            src="/favicon.svg"
            alt="SVG as an image"
          />
        </span>
        <span className="text-xl lg:text-3xl font-bold">Copero</span>
      </div>

      <Link href="https://github.com/UltiRequiem/copero" passHref>
        <a className="inline-block lg:text-xl px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">
          Open Source
        </a>
      </Link>
    </nav>
  );
}
