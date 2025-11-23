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
import { SearchIcon } from "./shared/Icons";
import { fetchInfo } from "../../api/auth";
import { fetchProducts } from "../../api/products";
import { MEDIA_URL } from "../../../urls";
import EmptyCart from "./EmptyCart";


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
    <div ref={dropdownRef} className="relative">
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
  const { profile, setProfile } = useStateContext();
  const [openMenu, setOpenMenu] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [keyword, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const openSearchRef = useRef();
  useEffect(() => {
    async function check() {
      const resp = await fetchInfo()
      if (resp['type'] == 'success') {
        setProfile(resp.data)
      }

    }
    check()
  }, [])
  useEffect(() => {
    async function fetchData() {
      const resp = await fetchProducts({ keyword })
      if (resp.count > 0) {
        setSearchResults(resp.results)
        console.log(resp.results)
      }

    }
    fetchData()
  }, [keyword])
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
                  value={keyword}
                  onChange={(e) => setSearch(e.target.value)}
                  className="ml-2 peer/search bg-gray-50 border-none py-1 focus:outline-none focus:ring-0 w-full" />
                <div className="border peer-focus/search:block hidden shadow-md hover:block flex-col items-center justify-center top-12 rounded-md min-h-12 w-[min(100%,400px)] absolute bg-white">

                  {searchResults.length > 0 ? <>
                    <div className="px-2 py-2 flex flex-col gap-2 max-h-[400px] overflow-y-auto ">
                      {searchResults.map((product) => (
                        <Link href={`/products/${product.slug}`} className="flex border rounded-md p-1">
                          <Image src={`${MEDIA_URL}/${product.image}`}
                            alt={product.title}
                            className="w-16 h-16 rounded-md"
                            width={10000}
                            height={10000} />
                          <div className="flex ml-2 flex-col gapp-2">
                            <p className="text-md font-bold">{product.title}</p>
                            <p className="text-sm font-bold text-purple-600">{product.act_price} DZD</p>
                          </div>
                        </Link>
                      ))}

                    </div>
                    <Link href={`/products/?keyword=${keyword}`} className="flex hover:underline font-bold text-purple-600 z-[1000] absolute w-full rounded-b-md bottom-0 items-center justify-center bg-gray-200  h-[40px]">
                      Show all results
                    </Link>
                  </> : <p className="text-gray-500 text-sm font-bold px-4 py-4">
                    Start Typing To Search
                  </p>}
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
            <>
              <button
                onClick={() => setShowCart(true)}
                className="relative bg-[rgb(90,71,251)] mr-1 text-white px-4 py-2 rounded-lg flex items-center gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6"
                >
                  <circle cx="8" cy="21" r="1"></circle>
                  <circle cx="19" cy="21" r="1"></circle>
                  <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
                </svg>
              </button>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <DropDownMenu Icon={ProfileButoon}>
                  <DropDownLink href="/account/orders" title="Orders" />
                  <DropDownLink href="/account/settings" title="Settings" />

                </DropDownMenu>

              </div>
              {showCart && <EmptyCart onClose={() => setShowCart(false)} />}
            </>

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
