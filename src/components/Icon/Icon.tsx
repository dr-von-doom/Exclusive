export type IconProps = {
  href: string;
  svg: React.ReactNode;
};

export const Icon = ({ href, svg }: IconProps) => {
  return (
    <a
      href={href}
      className="transition-transform duration-300 ease-in-out hover:scale-110"
    >
      <div className="h-[30px] w-[30px] fill-current text-white">{svg}</div>
    </a>
  );
};

export default Icon;
