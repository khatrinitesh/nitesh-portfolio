import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  icon?: ReactNode;
}

export default function Button({
  children,
  icon,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={`
        group
        inline-flex
        items-center
        justify-center
        gap-3
        rounded-full
        bg-white
        px-6
        py-3
        text-sm
        font-semibold
        text-black
        transition-all
        duration-300
        hover:bg-[#ff66e6]
        ${className}
      `}
    >
      {children}

      {icon}
    </button>
  );
}
