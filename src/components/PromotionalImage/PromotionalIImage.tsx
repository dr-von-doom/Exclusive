const baseURL = import.meta.env.BASE_URL;

export type PromotionalImageProps = {
  src: string;
  alt: string;
  href: string;
  className?: string;
};

const PromotionalImage = ({
  src,
  alt,
  href,
  className = "",
}: PromotionalImageProps) => {
  return (
    <a href={href} className="block p-4">
      <img
        src={`${baseURL}/${src}`}
        alt={alt}
        className={`h-auto max-w-full rounded-[20px] shadow-md ${className}`}
      />
    </a>
  );
};

export default PromotionalImage;
