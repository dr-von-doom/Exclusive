import React from 'react';
import { BannerProps } from '@/types/Banner';

const Banner: React.FC<BannerProps> = ({
  mainText,
  title,
  subtitle,
  imageSrc,
  icons,
  shopNowLink,
}) => {
  return (
    <section>
      <div className="bg-black flex flex-col items-center rounded-[20px] m-4 p-2">
        <p className="text-white font-light text-xxl tracking-[0.3em] m-2.5">
          {mainText}
        </p>

        <div className="flex flex-col md:flex-row items-center justify-around w-full">
          <div className="flex flex-col items-center md:items-start justify-start">
            <p className="font-semibold text-4xl tracking-[0.2em] text-green-500 font-sans mb-2.5 text-center md:text-left">
              {title}
              <br />
              {subtitle}
            </p>
            <div className="flex flex-row items-center gap-[30px]">
              {icons.map((icon, index) => (
                <a
                  href={icon.href}
                  key={index}
                  className="hover:scale-110 transition-transform duration-300 ease-in-out"
                >
                  <div className="w-[30px] h-[30px] text-white fill-current">
                    {icon.svg}
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="mt-4 md:mt-0 md:ml-4">
            <img
              src={imageSrc}
              alt="Products sale"
              className="w-[250px] h-[200px]"
            />
          </div>
        </div>

        <div className="flex flex-row items-center mt-4">
          <a
            href={shopNowLink}
            className="text-white font-light text-xl tracking-[0.3em] m-2.5 border border-white rounded-md px-4 py-2 hover:bg-white hover:text-black transition-colors duration-300 ease-in-out"
          >
            Shop Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Banner;