"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLink = [
    { name: "Register", href: "/register" },
    { name: "Login", href: "/login" },
    { name: "Forgot Password", href:"/forgot-password"}
];

export default function RootLayout({ children }) {
    const Pathname = usePathname();
    return (
      <div>
        {
            navLink.map((link) => {
                const isActive = Pathname.startsWith(link.href);
                return (
                    <Link href={link.href} key={link.name}
                    className={isActive? "font-bold mr-4" : "text-blue-500 mr-4"}>
                        {link.name}
                    </Link>
                );
            })
        }
        <h1>Inner Layout</h1>
        {children}
      </div>
    );
}
