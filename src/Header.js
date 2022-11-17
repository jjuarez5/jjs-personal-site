import { FaLaptopCode } from "react-icons/fa";

function Header() {
  return (
    <div className="container font-semibold inline-flex flex-1 bg-blue-900 text-zinc-100 drop-shadow-lg">
      <a className="no-underline" href="#home">
        <h1 className="text-5xl">
          <FaLaptopCode className="inline-block mx-1 mr-3 mb-2 hover:text-yellow-400" />
        </h1>
      </a>
      <ul className="inline-flex flex-1 justify-center text-lg space-x-8 mt-3">
        <li>
          <a className="no-underline hover:text-yellow-400" href="#resume">
            Resume
          </a>
        </li>
        {/* <li>
          <a className="no-underline hover:text-yellow-400" href="#projects">
            Projects
          </a>
        </li> */}
        <li>
          <a className="no-underline hover:text-yellow-400" href="#contact">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Header;
