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
    <nav className="flex gap-5 bg-gray-600 p-2">
      {links.map((link) => (
        <Link
          key={link.name}
          className={clsx(
            "flex rounded-md bg-gray-700 p-3 text-sm font-medium hover:bg-purple-100 hover:text-purple-600",
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
