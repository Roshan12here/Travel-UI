'use client'

import { useState } from 'react';
import { NAV_LINKS } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Button from './Button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className=" bg-light-gray flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="/pngegg.png" alt="logo" width={134} height={69} />
      </Link>

      {/* Display links on large screens */}
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link href={link.href} key={link.key} className="regular-16 text-blue-70  flexCenter cursor-pointer pb-1.5 transition-all hover:text-blue-800 hover:font-bold hover:text-underline">
            {link.label}
          </Link>
        ))}
      </ul>

      <div className="lg:flexCenter hidden">
        <Button 
          type="button"
          title="Login"
          icon="/user.svg"
          variant="loginbtn"
        />
      </div>

      {/* Display image to access links on small screens */}
      <Image
        src="menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
        onClick={toggleMenu}
      />

      <div
        className={`lg:hidden fixed top-0 left-0 h-full w-64 bg-light-gray transform ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform ease-in-out`}
      >
                <Image src="/pngegg.png" alt="logo" width={174} height={99} />
        <ul className="mt-10 p-4 space-y-4 ">
          {NAV_LINKS.map((links) => (
            <li key={links.key} className="bg-light-blue font-bold p-4 text-xl transition duration-300 ease-in-out hover:loginbtn">
              <Link href={links.href}>
                {links.label}
              </Link>
            </li>
          ))}
          {/* Display the login button at the end of the menu */}
          <li className="bg-white font-extrabold  p-4 text-xl">
            <Button type="button" title="Login" icon="/user.svg" variant="loginbtn" />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
