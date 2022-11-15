import {FaLaptopCode} from 'react-icons/fa';

function Header() {
    return (
      <div className="container font-semibold inline-flex flex-1 bg-violet-900 text-zinc-100 drop-shadow-lg">
        <a className='no-underline' href='#home' ><h1 className='text-5xl'><FaLaptopCode className='inline-block mr-3 mb-1'/></h1></a>
        <ul className='inline-flex flex-1 justify-center text-lg space-x-20 mt-3'>
            <li>
                <a className="no-underline" href="#resume">Resume</a>
            </li>
            <li>
                <a className="no-underline" href="#projects">Projects</a>
            </li>
            <li>
                <a className="no-underline" href="#contact">Contact</a>
            </li>
        </ul>
      </div>
    );
  }

export default Header;