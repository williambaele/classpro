import React, { useState } from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { BiMath } from "react-icons/bi";
import { GiPublicSpeaker } from "react-icons/gi";
import { IoEarthOutline } from "react-icons/io5";
import { GiMaterialsScience } from "react-icons/gi";
import { LuBookMarked } from "react-icons/lu";
import { PiStudent } from "react-icons/pi";

const TabLessons = () => {
  const lessons = [
    {
      name: "Math",
      content:
        "Quisque bibendum elit malesuada risus pulvinar, non scelerisque ligula viverra. Suspendisse sit amet tellus eget urna placerat porta. Nam accumsan, dui sit amet mollis egestas, est sapien pretium nulla, vitae eleifend elit lectus at est. Quisque nec efficitur odio. Pellentesque et nunc ut dolor mollis sodales sed ut metus. Etiam convallis elementum diam quis imperdiet. Maecenas tincidunt sem quis neque gravida blandit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur.",
      chapters: ["Chapitre 1", "Chapitre 2", "Chapitre 3", "Chapitre 4"],
      svg: <BiMath />,
    },
    {
      name: "Sciences",
      content:
        "Quisque bibendum elit malesuada risus pulvinar, non scelerisque ligula viverra. Suspendisse sit amet tellus eget urna placerat porta. Nam accumsan, dui sit amet mollis egestas, est sapien pretium nulla, vitae eleifend elit lectus at est. Quisque nec efficitur odio. Pellentesque et nunc ut dolor mollis sodales sed ut metus. Etiam convallis elementum diam quis imperdiet. Maecenas tincidunt sem quis neque gravida blandit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur.",
      chapters: ["Chapitre 1", "Chapitre 2", "Chapitre 3", "Chapitre 4"],
      svg: <GiMaterialsScience />,
    },
    {
      name: "Histoire",
      content:
        "Quisque bibendum elit malesuada risus pulvinar, non scelerisque ligula viverra. Suspendisse sit amet tellus eget urna placerat porta. Nam accumsan, dui sit amet mollis egestas, est sapien pretium nulla, vitae eleifend elit lectus at est. Quisque nec efficitur odio. Pellentesque et nunc ut dolor mollis sodales sed ut metus. Etiam convallis elementum diam quis imperdiet. Maecenas tincidunt sem quis neque gravida blandit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur.",
      chapters: ["Chapitre 1", "Chapitre 2", "Chapitre 3", "Chapitre 4"],
      svg: <LuBookMarked />,
    },
    {
      name: "Géographie",
      content:
        "Quisque bibendum elit malesuada risus pulvinar, non scelerisque ligula viverra. Suspendisse sit amet tellus eget urna placerat porta. Nam accumsan, dui sit amet mollis egestas, est sapien pretium nulla, vitae eleifend elit lectus at est. Quisque nec efficitur odio. Pellentesque et nunc ut dolor mollis sodales sed ut metus. Etiam convallis elementum diam quis imperdiet. Maecenas tincidunt sem quis neque gravida blandit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur.",
      chapters: ["Chapitre 1", "Chapitre 2", "Chapitre 3", "Chapitre 4"],
      svg: <IoEarthOutline />,
    },
    {
      name: "Français",
      content:
        "Quisque bibendum elit malesuada risus pulvinar, non scelerisque ligula viverra. Suspendisse sit amet tellus eget urna placerat porta. Nam accumsan, dui sit amet mollis egestas, est sapien pretium nulla, vitae eleifend elit lectus at est. Quisque nec efficitur odio. Pellentesque et nunc ut dolor mollis sodales sed ut metus. Etiam convallis elementum diam quis imperdiet. Maecenas tincidunt sem quis neque gravida blandit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur.",
      chapters: ["Chapitre 1", "Chapitre 2", "Chapitre 3", "Chapitre 4"],
      svg: <GiPublicSpeaker />,
    },
    {
      name: "Option",
      content:
        "Quisque bibendum elit malesuada risus pulvinar, non scelerisque ligula viverra. Suspendisse sit amet tellus eget urna placerat porta. Nam accumsan, dui sit amet mollis egestas, est sapien pretium nulla, vitae eleifend elit lectus at est. Quisque nec efficitur odio. Pellentesque et nunc ut dolor mollis sodales sed ut metus. Etiam convallis elementum diam quis imperdiet. Maecenas tincidunt sem quis neque gravida blandit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur.",
      chapters: ["Chapitre 1", "Chapitre 2", "Chapitre 3", "Chapitre 4"],
      svg: <PiStudent style={{ fontSize: "24px" }} />,
    },
  ];

  const [activeTab, setActiveTab] = useState(0);
  return (
    <div
      className="container mx-auto px-4 md:px-0 flex flex-col space-y-6 py-16"
      id="contenu"
    >
      <div className="flex flex-col space-y-4">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
          Contenu des cours
        </h2>
        <p className="text-lg">
          Quisque bibendum elit malesuada risus pulvinar, non scelerisque ligula
          viverra. Suspendisse sit amet tellus eget urna placerat porta. Nam
          accumsan, dui sit amet mollis egestas, est sapien pretium nulla, vitae
          eleifend elit lectus at est. Quisque nec efficitur odio. Pellentesque
          et nunc ut dolor mollis sodales sed ut metus.
        </p>
      </div>
      <div className="md:flex gap-6">
        <ul className="grid grid-cols-3 gap-2 md:block space-y md:space-y-4 justify-around text-sm font-medium text-gray-500 mb-4 items-end">
          {lessons.map((title, index) => (
            <li key={index} onClick={() => setActiveTab(index)}>
              <div
                className={`inline-flex justify-center md:justify-start gap-2  items-center px-2 md:px-4 py-3 rounded-md cursor-pointer w-full ${
                  activeTab === index
                    ? "bg-[#DB4105] text-white font-bold"
                    : "bg-gray-100"
                }`}
                aria-current="page"
              >
                {title.svg}
                {title.name}
              </div>
            </li>
          ))}
        </ul>
        <div className="p-6 bg-gray-100 text-medium text-gray-500 rounded-lg w-full flex flex-col justify-between space-y-4 md:space-y-0">
          <div className="flex flex-col">
            <h3 className="text-xl font-bold text-gray-900  mb-2">
              Cours de {lessons[activeTab].name}
            </h3>
            <p className="mb-2">{lessons[activeTab].content}</p>
            <div className="flex flex-col space-y-2">
              <h3 className="text-lg text-gray-800">Contenu du cours</h3>
              <ul className="list-disc  list-inside">
                {lessons[activeTab].chapters.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex justify-start md:justify-end">
            <button className="bg-[#DB4105] hover:bg-[#DB4105]/90 text-white text-sm p-2 rounded-md flex items-center gap-2">
              <FaRegFileAlt />
              Télécharger la brochure
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabLessons;
