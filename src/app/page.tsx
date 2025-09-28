"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if token exists in localStorage
    setIsLoggedIn(!!localStorage.getItem("token"));
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 flex flex-col">
      {/* Hero Section */}
      <section className="flex flex-1 flex-col items-center justify-center text-center px-6">
        <h2 className="text-5xl font-extrabold text-blue-700 mb-4">
          Capture Your Journeys ✈️
        </h2> 
        <p className="text-lg text-gray-700 mb-6 max-w-xl"> 
          Keep track of all your adventures, memories, and trips in one simple
          place. Start journaling today and never forget your amazing
          experiences!
        </p>
        <Link
          href={isLoggedIn ? "/trips" : "/login"} // Redirect based on login
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-lg transition"
        >
          Get Started
        </Link>
      </section>

      {/* Footer */}
      <footer className="text-center py-4 bg-white shadow-inner text-gray-600 flex flex-col items-center gap-1">
        <span>
          © {new Date().getFullYear()} Travel Journal | Built with Next.js 15
        </span>
        <span>
          Developed by <strong>Aman Kumar Sharma</strong> |
          <a
            href="https://github.com/amansharma6664"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline mx-1"
          >
            GitHub
          </a>{" "}
          |
          <a
            href="http://www.linkedin.com/in/aman-kumar-sharma-876250212"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline mx-1"
          >
            LinkedIn
          </a>
        </span>
      </footer>
    </main>
  );
}
