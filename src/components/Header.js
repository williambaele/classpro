import React, { useState } from "react";
import Logo from "../assets/images/logo.png";

const Header = () => {
  const menu = [
    {
      name: "Fonctionnement",
      path: "/#fonctionnement",
    },
    {
      name: "Témoignages",
      path: "#temoignages",
    },
    {
      name: "FAQ",
      path: "#faq",
    },
  ];

  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  return (
    <header className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-20">
      <div className="mx-auto px-4 md:px-0 container mx-auto">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12 h-full">
            <a className="h-full" href="/">
              <img src={Logo} className="object-cover h-full" alt="Logo" />
            </a>
          </div>

          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                {menu.map((item, index) => (
                  <li key={index}>
                    <a
                      className="text-gray-500 transition hover:text-gray-500/75"
                      href={item.path}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                <a
                  className="rounded-md bg-[#DB4105] px-5 py-2.5 text-sm font-medium text-white shadow"
                  href="/#contact"
                >
                  S'inscrire
                </a>
              </div>

              <div className="block md:hidden">
                <button
                  onClick={toggleDropdown}
                  className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>

                {isDropdownVisible && (
                  <div className="absolute top-16 right-0  w-full bg-white border-gray-200 shadow-md">
                    <ul className="py-2">
                      {menu.map((item, index) => (
                        <li key={index} onClick={toggleDropdown}>
                          <a
                            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                            href={item.path}
                          >
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
