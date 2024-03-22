import { useTheme } from '../ThemeContext';
import { SunIcon, MoonIcon } from '@heroicons/react/solid';

function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="bg-blue-500 dark:bg-gray-900 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-white text-lg font-bold flex items-center">
          <img src="https://getonbrd-prod.s3.amazonaws.com/uploads/users/logo/1991/icon.png" alt="Logo" className='mr-3 w-10 h-10'/>
          RindeCountries
        </a>
       
      </div>
    </nav>
  );
}

export default Navbar;
