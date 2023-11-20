import React from "react";
import Logo from "../assets/images/logo.png";

const Header = () => {
  const menu = [
    {
      name: "Fonctionnement",
      path: "/fonctionnement",
    },
    {
      name: "Prix",
      path: "/prix",
    },
    {
      name: "Témoignages",
      path: "/temoignages",
    },
    {
      name: "FAQ",
      path: "/faq",
    },
  ];
  return (
    <header class="bg-white border-b border-gray-200 shadow-sm">
      <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 ">
        <div class="flex h-16 items-center justify-between">
          <div class="flex-1 md:flex md:items-center md:gap-12 h-full">
            <div class="h-full">
              <img src={Logo} className="object-cover h-full" />
            </div>
          </div>

          <div class="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" class="hidden md:block">
              <ul class="flex items-center gap-6 text-sm">
                {menu.map((item, index) => (
                  <li key={index}>
                    <a
                      class="text-gray-500 transition hover:text-gray-500/75"
                      href={item.path}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div class="flex items-center gap-4">
              <div class="sm:flex sm:gap-4">
                <a
                  class="rounded-md bg-[#DB4105] px-5 py-2.5 text-sm font-medium text-white shadow"
                  href="/"
                >
                  S'inscrire
                </a>
              </div>

              <div class="block md:hidden">
                <button class="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
