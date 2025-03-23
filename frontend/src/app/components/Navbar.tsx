"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "Habits", href: "/habits" },
  { name: "Something", href: "/something" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="flex gap-5">
      {links.map((link) => (
        <Link
          key={link.name}
          className={clsx(
            "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-purple-600 md:flex-none md:justify-start md:p-2 md:px-3",
            {
              "bg-purple-100 text-purple-600": pathname === link.href,
            }
          )}
          href={link.href}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
}
