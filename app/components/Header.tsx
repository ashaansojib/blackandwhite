import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="my-container flex gap-6 items-center">
      <Link href="/" className="text-2xl font-semibold">AS.</Link>

      <div className="flex justify-between w-full items-center">
        <ul className="flex gap-4">
          <Link href="/" className="nav-link">
            Notes
          </Link>
          <Link href="/" className="nav-link">
            Blogs
          </Link>
          <Link href="/" className="nav-link">
            Work With Me
          </Link>
          <Link href="/" className="nav-link">
            Contact
          </Link>
        </ul>
        <span className="flex items-center gap-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-5"
          >
            <path
              fillRule="evenodd"
              d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z"
              clipRule="evenodd"
            />
          </svg>

          <Link href="/" className="px-4 py-1 border rounded-md">
            Sign In
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Header;
