"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import {
  AuthButtons,
  MobileMenuButtons,
  ProfileButoon,
} from "./shared/Buttons";
import { useStateContext } from "../../../context/contextProvider";
import LogoImage from "../resources/logo.png";
import Image from "next/image";
import { useSettings } from "../../../roupi/auth";
import { SearchIcon } from "./shared/Icons";
// slsjlk
export const Logo = () => {
  return (
    <div className="flex flex-shrink-0 items-center w-14 h-14">
      <Image src={LogoImage} width={60} height={60} />
    </div>
  );
};

const DropDownLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="block hover:bg-gray-100  px-4 py-2 text-sm text-gray-700"
    >
      {title}
    </Link>
  );
};

const DropDownMenu = ({ Icon, children }) => {
  const [dropdown, setDropdown] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdown(false);
        document.removeEventListener("click", () => "");
      }
    }

    document.addEventListener("click", (e) => handleClickOutside(e));
  }, []);
  return (
    <div ref={dropdownRef} className="relative ml-3">
      <Icon action={() => setDropdown(!dropdown)} />
      {dropdown && (
        <div
          onClick={() => setDropdown(!dropdown)}
          className="absolute  right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          id="menu"
        >
          {children}
        </div>
      )}
    </div>
  );
};

const MenuLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="text-gray-900 text-md ml-4 font-bold hover:bg-gradient-to-r from-[#ff80b5] to-[#9089fc] hover:text-white rounded-md px-3 py-2"
    >
      {title}
    </Link>
  );
};

const Navigation = () => {
  return (
    <>
      <MenuLink href="/" title="Home" />
      <MenuLink href="/products" title="Products" />
    </>
  );
};

export const Nav = () => {
  useSettings();
  const { profile } = useStateContext();
  const [openMenu, setOpenMenu] = useState(false);
  const [search, setSearch] = useState(false);
  const openSearchRef = useRef();
  const results = [];
  return (
    <nav className="bg-gray-50 top-0 sticky z-10">
      <div className="mx-auto max-w-full px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/*Mobile menu button */}
          <MobileMenuButtons
            onclick={() => setOpenMenu(!openMenu)}
            open={openMenu}
          />
          <div className="flex flex-1 justify-center sm:items-stretch sm:justify-start">
            <Logo />
            <p className="font-bold text-lg text-gray-900 pt-[12px]">
              PlanetGames
            </p>
            <div className="hidden sm:flex w-full items-center justify-center relative">
              <div
                className="border relative flex items-center justify-center px-2 py-1 rounded-md w-[min(100%,400px)] cursor-pointer"
              >
                <SearchIcon />
                <input
                  className="ml-2 peer/search bg-gray-50 border-none py-1 focus:outline-none focus:ring-0 w-full" />
                <div className="border peer-focus/search:block hidden shadow-md flex-col items-center justify-center top-12 rounded-md min-h-12 w-[min(100%,400px)] px-2 py-2 absolute bg-white">
                  <p className="text-gray-500 text-sm font-bold px-4 py-4">
                    Start Typing To Search
                  </p>
                </div>
              </div>

              {/* Dropdown that appears when checkbox is checked */}
            </div>


          </div>
          {!profile.email && (
            <div className="flex h-full items-center">
              <AuthButtons />
            </div>
          )}
          {profile.email && (
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <DropDownMenu Icon={ProfileButoon}>
                <DropDownLink href="/account/orders" title="Orders" />
                <DropDownLink href="/account/settings" title="Settings" />
              </DropDownMenu>
            </div>
          )}
        </div>
      </div>
      <div className="border-t sm:hidden">
        <div className="flex w-full items-center justify-center relative">
          <input
            ref={openSearchRef}
            type="checkbox"
            className="peer/search hidden"
            name="search"
            id="search"
          />
          <label
            htmlFor="search"
            className="border relative flex items-center justify-center px-2 py-1 rounded-md w-[min(100%,400px)]"
          >
            <SearchIcon />
            <input className="ml-2 bg-gray-50 border-none py-1 focus:outline-none focus:ring-0 w-full" />
          </label>

          <div className="border shadow-md hidden peer-checked/search:block flex-col items-center justify-center top-12 rounded-md min-h-12 w-full absolute bg-white">
            {search && results.length === 0 && (
              <p className="text-gray-500 text-sm font-bold">
                Start Typing To Search
              </p>
            )}
          </div>
        </div>
      </div>
      <div className="border-t">
        <div className="hidden sm:ml-6 sm:block">
          <div className="flex space-x-4 py-2">
            <Navigation />
          </div>
        </div>
      </div>
      {openMenu && (
        <div className="space-y-1 px-2 pb-3 pt-2 min-[640px]:hidden">
          <Navigation />
        </div>
      )}
    </nav>
  );
};
