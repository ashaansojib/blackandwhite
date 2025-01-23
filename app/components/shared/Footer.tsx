import Link from "next/link";
import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF, FaGithub, FaTwitter, FaWhatsapp } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="my-container text-center py-6">
      <div className="flex justify-between items-center max-w-screen-sm mx-auto py-6">
        <Link className="footer-links" href="/">
          Work With Me
        </Link>
        <Link className="footer-links" href="/">
          Projects
        </Link>
        <Link className="footer-links" href="/">
          Contact
        </Link>
        <Link className="footer-links" href="/">
          Success
        </Link>
        <Link className="footer-links" href="/">
          Partners
        </Link>
      </div>
      <ul className="flex gap-4 justify-center py-4">
        <Link href="/" className="social-icon">
          <FaLinkedinIn />
        </Link>
        <Link href="/" className="social-icon">
          <FaGithub />
        </Link>
        <Link href="/" className="social-icon">
          <FaFacebookF />
        </Link>
        <Link href="/" className="social-icon">
          <FaTwitter />
        </Link>
        <Link href="/" className="social-icon">
          <FaWhatsapp />
        </Link>
      </ul>
      <span className="text-secondary">
        @ 2025 Developer Sojib. All rights reserved.
      </span>
    </div>
  );
};

export default Footer;
