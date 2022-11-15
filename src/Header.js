import {FaLaptopCode} from 'react-icons/fa';

function Header() {
    return (
      <div className="Header container mx-auto mt-3 font-semibold inline-flex space-x-40">
        <h1 className='text-5xl'><FaLaptopCode className='inline-block text-red-400 mr-3 mb-0.5'/>Julio Juarez</h1>
        <ul className='flex text-lg space-x-10 mt-4'>
            <li>
                Home
            </li>
            <li>
                About
            </li>
            <li>
                Contact
            </li>
        </ul>
      </div>
    );
  }

export default Header;