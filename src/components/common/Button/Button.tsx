import clsx from "clsx";

export type ButtonProps = {
  onClick?: () => void;
  children?: React.ReactNode;
  filled?: boolean;
  type?: "primary" | "secondary";
  className?: string;
};

export const Button = ({
  onClick = () => {},
  children = "",
  filled = true,
  type = "primary",
  className = "",
}: ButtonProps) => {
  return (
    <button
      className={clsx(
        {
          "hover:bg-red-700 hover:text-white": type === "primary",
          "border-2 bg-transparent": !filled,
          " bg-red-500 text-white": filled && type === "primary",
          "border-red-500": !filled && type === "primary",
          "hover:bg-green-500 hover:text-white": type === "secondary",
          "bg-green-400 text-white": filled && type === "secondary",
          "border-green-400": !filled && type === "secondary",
        },
        "rounded px-5 py-2 shadow-sm transition-transform hover:scale-x-105", // default classes
        className, // external classes
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
