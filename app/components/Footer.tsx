import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="my-container text-center">
        <div className="flex justify-between items-center max-w-screen-sm mx-auto py-6">
            <Link className="footer-links" href="/">Work With Me</Link>
            <Link className="footer-links" href="/">Projects</Link>
            <Link className="footer-links" href="/">Contact</Link>
            <Link className="footer-links" href="/">Success</Link>
            <Link className="footer-links" href="/">Partners</Link>
        </div>
      <span className="text-gray-600">@ 2025 Developer Sojib. All rights reserved.</span>
    </div>
  );
};

export default Footer;
