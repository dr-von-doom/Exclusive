import accountIcon from '../../assets/icons/account.svg';
import cartIcon from '../../assets/icons/cart.svg';
import logo from '../../assets/icons/logo.svg';
import searchIcon from '../../assets/icons/search.svg';

interface HeaderProps {
  logoLink?: string;
  cartLink?: string;
}

export const Header = ({ logoLink = '/', cartLink = '#' }: HeaderProps) => {
  return (
    <header className="flex flex-col text-sm md:text-base md:flex-row items-center justify-between p-4 px-7 bg-white text-gray-800 font-poppins">

      <div className="flex items-center mb-2 md:mb-0 pb-4 md:pb-1">
        <a href={logoLink} className="flex items-center">
          <img className="h-8 w-auto" src={logo} alt="logo" />
        </a>
      </div>

      <div className="flex w-full h-9 md:w-1/4 ">
        <input
          className="focus:outline-none rounded-l p-3 px-5 w-full bg-[#F5F5F5] border-none"
          type="text"
          placeholder="What are you looking for?"
        />
        <button className="rounded-r p-2 px-5 bg-[#F5F5F5] border-none cursor-pointer">
          <img className="h-5 w-5" src={searchIcon} alt="search" />
        </button>
      </div>

      <div className="flex space-x-4 mt-2 md:mt-0">
        <a href="#" className="flex items-center text-black hover:text-red-600 no-underline">
          <img src={accountIcon} alt="account" className="mr-1" />
          <span className="md:inline">Account</span>
        </a>
        <a href={cartLink} className="flex items-center text-black hover:text-red-600 no-underline">
          <img src={cartIcon} alt="cart" className="mr-1" />
          <span className="md:inline">Cart</span>
        </a>
      </div>
    </header>
  );
};

export default Header;
