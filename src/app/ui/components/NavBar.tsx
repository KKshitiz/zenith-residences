import { Share2Icon } from "lucide-react";

const NavBar = () => {
  return (
    <nav className="flex justify-between items-start mb-3">
      <div className="block lg:hidden h-10 bg-dark">Floor #14</div>
      <div className="hidden lg:block w-1/3 h-10 bg-dark/75"></div>
      <div className="flex gap-2">
        <button className="hidden lg:block">
          <Share2Icon />
        </button>
        <button className="uppercase p-2 bg-primary">Get brochure</button>
      </div>
    </nav>
  );
};

export default NavBar;
