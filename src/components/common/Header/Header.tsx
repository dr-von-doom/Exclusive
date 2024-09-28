import accountIcon from "@/assets/icons/account.svg";
import cartIcon from "@/assets/icons/cart.svg";
import logo from "@/assets/icons/logo.svg";
import searchIcon from "@/assets/icons/search.svg";
import { Link } from "react-router-dom";

interface HeaderProps {
  logoLink?: string;
  cartLink?: string;
}

export const Header = ({ logoLink = "/", cartLink = "#" }: HeaderProps) => {
  return (
    <header className="flex flex-col items-center justify-between bg-white p-4 px-7 font-poppins text-sm text-gray-800 md:flex-row md:text-base">
      <div className="mb-2 flex items-center pb-4 md:mb-0 md:pb-1">
        <Link to={logoLink} className="flex items-center">
          <img className="h-8 w-auto" src={logo} alt="logo" />
        </Link>
      </div>

      <div className="flex h-9 w-full md:w-1/4">
        <input
          className="w-full rounded-l border-none bg-[#F5F5F5] p-3 px-5 focus:outline-none"
          type="text"
          placeholder="What are you looking for?"
        />
        <button className="cursor-pointer rounded-r border-none bg-[#F5F5F5] p-2 px-5">
          <img className="h-5 w-5" src={searchIcon} alt="search" />
        </button>
      </div>

      <div className="mt-2 flex space-x-4 md:mt-0">
        <Link
          to="#"
          className="flex items-center text-black no-underline hover:text-red-600"
        >
          <img src={accountIcon} alt="account" className="mr-1" />
          <span className="md:inline">Account</span>
        </Link>
        <Link
          to={cartLink}
          className="flex items-center text-black no-underline hover:text-red-600"
        >
          <img src={cartIcon} alt="cart" className="mr-1" />
          <span className="md:inline">Cart</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
