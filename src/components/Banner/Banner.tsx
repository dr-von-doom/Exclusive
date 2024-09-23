import CameraIcon from "@/assets/icons/camera-icon.svg?react";
import HomeIcon from "@/assets/icons/home-icon.svg?react";
import PhoneIcon from "@/assets/icons/phone-icon.svg?react";
import TVIcon from "@/assets/icons/tv-icon.svg?react";
import { Icon, IconProps } from "../Icon";

export type BannerProps = {
  mainText: string;
  title: string;
  subtitle?: string;
  imageSrc: string;
  shopNowLink: string;
};

const icons: IconProps[] = [
  {
    href: "#",
    svg: <HomeIcon />,
  },
  {
    href: "#",
    svg: <PhoneIcon />,
  },
  {
    href: "#",
    svg: <TVIcon />,
  },
  {
    href: "#",
    svg: <CameraIcon />,
  },
];

const Banner = ({
  mainText,
  title,
  subtitle,
  imageSrc,
  shopNowLink,
}: BannerProps) => {
  return (
    <section>
      <div className="m-4 flex flex-col items-center rounded-[20px] bg-black p-6">
        <p className="text-xxl mx-2.5 mb-5 mt-2.5 text-center font-light tracking-[0.3em] text-white">
          {mainText}
        </p>

        <div className="flex w-full flex-col items-center justify-around md:flex-row">
          <div className="flex flex-col items-center justify-start md:items-start">
            <p className="mb-5 text-center font-sans text-4xl font-semibold tracking-[0.2em] text-green-500 md:text-left">
              {title}
              <br />
              {subtitle}
            </p>
            <div className="my-3 flex flex-row items-center gap-[30px]">
              {icons.map((icon, index) => (
                <Icon key={index} {...icon} />
              ))}
            </div>
          </div>

          <div className="mt-4 md:ml-4 md:mt-0">
            <img
              src={imageSrc}
              alt="Products sale"
              className="h-[200px] w-[250px]"
            />
          </div>
        </div>

        <div className="mt-4 flex flex-row items-center">
          <a
            href={shopNowLink}
            className="m-2.5 rounded-md border border-white px-4 py-2 text-center text-xl font-light tracking-[0.3em] text-white transition-transform duration-300 ease-in-out hover:scale-110 hover:bg-white hover:text-black"
          >
            <span className="pl-[0.3em]">Shop Now</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Banner;
