import { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  children,
  className,
  ...props
}: Props) {
  return (
    <button
      className={cn(
        "neuro-button px-6 py-3 bg-[#ffe600] font-black uppercase text-black hover:-translate-y-1 transition-transform",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}