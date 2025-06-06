import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  href: string;
  children: ReactNode;
  bgColor?: string; // background normal
  hoverBgColor?: string; // background pas hover
  textColor?: string; // warna text normal
  hoverTextColor?: string; // warna text pas hover
  borderColor?: string; // warna border
  className?: string;
  onClick?: () => void;
}

export default function Button({
  href,
  children,
  className,
  bgColor = "bg-white",
  hoverBgColor = "hover:bg-primary",
  textColor = "text-black",
  hoverTextColor = "hover:text-white",
  borderColor = "border border-[#eaeaea]",
  onClick,
}: ButtonProps) {
  return (
    <Link
      onClick={onClick}
      href={href}
      className={`${className} flex items-center gap-4 pr-[5px] pl-4 rounded-full py-1 transition-all group ${bgColor} ${textColor} ${borderColor} ${hoverBgColor} ${hoverTextColor}`}
    >
      {children}
      <div
        className={`w-[38px] h-[38px] rounded-full flex items-center justify-center p-2 bg-primary text-white group-hover:bg-white group-hover:text-black`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="bi bi-arrow-up-right"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"
          />
        </svg>
      </div>
    </Link>
  );
}
