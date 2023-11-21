import React, { useState } from "react";

const TabLessons = () => {
  const titles = [
    {
      name: "Math",
      svg: "",
    },
    {
      name: "Sciences",
      svg: "",
    },
    {
      name: "Histoire",
      svg: "",
    },
    {
      name: "Géographie",
      svg: "",
    },
    {
      name: "Françcais",
      svg: "",
    },
    {
      name: "Option",
      svg: "",
    },
  ];

  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="container mx-auto px-4 md:px-0 flex flex-col space-y-6">
      <div className="flex flex-col space-y-4">
        <h2 className="text-3xl">
          Découvrez le contenu de nos cours préparatoires
        </h2>
        <p className="text-lg">
          This is some placeholder content the Profile tab's associated content,
          clicking another tab will toggle the visibility of this one for the
          next.
        </p>
      </div>
      <div className="md:flex  gap-4">
        <ul className="flex md:block space-y space-y-4 justify-around text-sm font-medium text-gray-500 mb-4  items-end">
          {titles.map((title, index) => (
            <li key={index} onClick={() => setActiveTab(index)}>
              <div
                className={`inline-flex items-center px-2 md:px-4 py-3 rounded-md cursor-pointer w-full ${
                  activeTab === index
                    ? "bg-[#DB4105] text-white font-bold"
                    : "bg-gray-100"
                }`}
                aria-current="page"
              >
                <svg
                  className="w-4 h-4 me-2 text-white hidden md:block"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                </svg>
                {title.name}
              </div>
            </li>
          ))}
        </ul>
        <div className="p-6 bg-gray-100 text-medium text-gray-500 rounded-lg w-full">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
            Profile Tab
          </h3>
          <p className="mb-2">
            This is some placeholder content the Profile tab's associated
            content, clicking another tab will toggle the visibility of this one
            for the next.
          </p>
          <p>
            The tab JavaScript swaps classes to control the content visibility
            and styling.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TabLessons;
