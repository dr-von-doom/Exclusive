import React from "react"; 
import FacebookIcon from "@/assets/icons/facebook.svg";
import InstagramIcon from "@/assets/icons/instagram.svg";
import MastercardIcon from "@/assets/icons/mastercard.svg";
import PaypalIcon from "@/assets/icons/paypal.svg";
import VisaIcon from "@/assets/icons/visa.svg";
import xIcon from "@/assets/icons/x.svg";
import categories from '@/data/category-groups.json';

interface Category {
  id: number;
  name: string;
}

export const Footer = () => {
  const handleSubmit = (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <footer className="font-poppins bg-black p-10 text-sm text-white">
      <div className="mb-5 flex flex-col items-center justify-center text-center lg:flex-row lg:justify-between">
        <div className="mb-5 lg:mb-0">
          <p className="pl-0 lg:pl-10">Exclusive S.A.</p>
          <p className="pl-0 lg:pl-10">NIT: 123456789-0</p>
        </div>

        <div className="mb-5 flex items-center gap-8 lg:mb-0">
          <a href="#">
            <img className="h-7 w-auto" src={FacebookIcon} alt="facebook" />
          </a>
          <a href="#">
            <img className="h-7 w-auto" src={xIcon} alt="x" />
          </a>
          <a href="#">
            <img className="h-7 w-auto" src={InstagramIcon} alt="Instagram" />
          </a>
        </div>

        <div className="flex items-center gap-8 pr-0 lg:pr-10">
          <a href="#">
            <img className="h-7 w-auto" src={PaypalIcon} alt="paypal" />
          </a>
          <a href="#">
            <img className="h-7 w-auto" src={VisaIcon} alt="visa" />
          </a>
          <a href="#">
            <img className="h-7 w-auto" src={MastercardIcon} alt="mastercard" />
          </a>
        </div>
      </div>

      <div className="flex flex-col justify-between gap-7 bg-black p-10 text-center text-white lg:flex-row lg:text-left">
        <div>
          <h3 className="mb-2 text-lg font-medium">Exclusive</h3>
          <p>Subscribe</p>
          <p>Get 10% off your first order</p>
          <form onSubmit={handleSubmit} className="flex flex-col items-center lg:flex-row lg:items-start">
            <input
              type="email"
              placeholder="Enter your email"
              className="mb-2 w-full max-w-xs border border-white bg-black p-2 lg:mb-0 lg:mr-2"
            />
            <button
              type="submit"
              className="w-full max-w-xs border border-white bg-black p-2 text-white lg:w-auto"
            >
              →
            </button>
          </form>
        </div>

        <div>
          <h3 className="mb-2 font-inter text-lg font-medium">Support</h3>
          <p>111 Bijoy Sarani, Dhaka, Bangladesh.</p>
          <p>
            <a
              href="mailto:info@exclusive.com"
              className="text-gray-400 hover:text-white"
            >
              info@exclusive.com
            </a>
          </p>
          <p>
            <a
              href="tel:+8801788888999"
              className="text-gray-400 hover:text-white"
            >
              +88010-88888-9999
            </a>
          </p>
        </div>

        <div>
          <h3 className="mb-2 text-lg font-medium font-inter">Categories</h3>
          <ul className="list-none p-0">
            {categories.map((category: Category) => (
              <li key={category.id} className="mb-1">
                <a href="#" className="text-gray-400 hover:text-white">
                  {category.name}
                </a>
              </li>
            ))}
          </ul>
        </div>


        <div>
          <h3 className="mb-2 font-inter text-lg font-medium">Quick Links</h3>
          <ul className="list-none p-0">
            <li className="mb-1">
              <a href="#" className="text-gray-400 hover:text-white">
                Privacy Policy
              </a>
            </li>
            <li className="mb-1">
              <a href="#" className="text-gray-400 hover:text-white">
                Terms & Conditions
              </a>
            </li>
            <li className="mb-1">
              <a href="#" className="text-gray-400 hover:text-white">
                FAQs
              </a>
            </li>
            <li className="mb-1">
              <a href="#" className="text-gray-400 hover:text-white">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
