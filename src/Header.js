import { FaLaptopCode } from "react-icons/fa";
import AnchorLink from "react-anchor-link-smooth-scroll";

function Header() {
  return (
    <div className="w-full sticky -top-0 z-0 font-semibold inline-flex flex-1 bg-blue-900 text-zinc-100 p-1 drop-shadow-lg">
      <AnchorLink className="no-underline" href="#home">
        <h1 className="text-5xl">
          <FaLaptopCode className="inline-block mx-1 mr-3 mb-2 hover:text-yellow-400" />
        </h1>
      </AnchorLink>
      <ul className="inline-flex flex-1 justify-center text-lg space-x-8 mt-3">
        <li>
          <AnchorLink
            className="no-underline hover:text-yellow-400"
            href="#resume"
          >
            Resume
          </AnchorLink>
        </li>
        {/* <li>
          <a className="no-underline hover:text-yellow-400" href="#projects">
            Projects
          </a>
        </li> */}
        <li>
          <AnchorLink
            className="no-underline hover:text-yellow-400"
            href="#contact"
          >
            Contact
          </AnchorLink>
        </li>
      </ul>
    </div>
  );
}

export default Header;
