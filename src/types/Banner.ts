export type IconProps = {
  href: string;
  svg: React.ReactNode;
};

export type BannerProps = {
  mainText: string;
  title: string;
  subtitle?: string;
  imageSrc: string;
  icons: IconProps[];
  shopNowLink: string;
};