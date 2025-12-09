"use client";
import clsx from "@/libs/clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export default function NavLink({
  icon,
  name,
  href,
}: {
  name: string;
  href: string;
  icon: ReactNode;
}) {
  const path = usePathname();
  return (
    <Link
      href={href}
      className={clsx(
        "flex items-center gap-2 p-2 hover:text-blue-600 duration-200",
        path === href && "text-blue-600"
      )}
    >
      {icon}
      <span className="hidden md:inline">{name}</span>
    </Link>
  );
}
