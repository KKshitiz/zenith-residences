import Link from "next/link";

export default function NotFound() {
  return (
    <div className="bg-[url('/images/not_found_bg.png')] bg-repeat w-full h-screen bg-[#1E1914] flex justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <div className="relative flex justify-center items-center">
          <h1 className="text-primary text-[280px]">404</h1>
        </div>
        <h2 className="text-lg">Oops! 404 - Page Not Found</h2>
        <p className="font-sans">
          Looks like you entered the wrong territory. Let’s find our way back.
        </p>
        <Link
          href="/"
          className="card mt-10 flex w-52 h-9 justify-between items-center uppercase p-2 bg-primary text-black"
        >
          <span>Go back home</span>
        </Link>
      </div>
    </div>
  );
}
