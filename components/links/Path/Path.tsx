"use client";

import { cls } from "@/utils/cls";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";

interface Props extends LinkProps {
  className?: string;
  children: React.ReactNode;
}

export default function Path({ className, children, href, ...rest }: Props) {
  const isActive = usePathname() == href;

  return (
    <Link
      {...rest}
      href={href}
      className={cls([
        "hover:animate-pulse",
        isActive && "underline underline-offset-4",
        className,
      ])}
    >
      {children}
    </Link>
  );
}
