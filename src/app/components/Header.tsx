"use client";
import Link from "next/link";
import LogoutButton from "./LogoutButton";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Header() {
  const pathname = usePathname(); // current page
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(!!localStorage.getItem("token"));
  }, []);

  return (
    <header className="flex justify-between items-center p-4 bg-black text-white shadow-md">
      <h1 className="text-2xl font-bold">Travel Journal</h1>

      {/* Navigation */}
      <nav>
        {pathname === "/" && !isLoggedIn ? (
          <div className="space-x-2">
            <Link  
              href="/login"
              className="bg-white text-black px-3 py-1 rounded hover:bg-gray-200 transition"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="bg-white text-black px-3 py-1 rounded hover:bg-gray-200 transition"
            >
              Signup
            </Link>
          </div>
        ) : isLoggedIn ? (
          <LogoutButton onLogout={() => setIsLoggedIn(false)} />
        ) : null}
      </nav>
    </header>
  );
}
