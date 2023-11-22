import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { BiMath } from "react-icons/bi";
import { GiPublicSpeaker } from "react-icons/gi";
import { IoEarthOutline } from "react-icons/io5";
import { GiMaterialsScience } from "react-icons/gi";
import { LuBookMarked } from "react-icons/lu";
import { PiStudent } from "react-icons/pi";

const Lessons = () => {
  const lessons = [
    {
      name: "Sciences",
      content: "Lorem ipsum dolor sit amet consectetur.",
      svg: <GiMaterialsScience style={{ fontSize: "26px" }} />,
    },
    {
      name: "Mathématiques",
      content: "Lorem ipsum dolor sit amet consectetur.",
      svg: <BiMath style={{ fontSize: "26px" }} />,
    },
    {
      name: "Français",
      content: "Lorem ipsum dolor sit amet consectetur.",
      svg: <GiPublicSpeaker style={{ fontSize: "26px" }} />,
    },
    {
      name: "Géographie",
      content: "Lorem ipsum dolor sit amet consectetur.",
      svg: <IoEarthOutline style={{ fontSize: "26px" }} />,
    },
    {
      name: "Histoire",
      content: "Lorem ipsum dolor sit amet consectetur.",
      svg: <LuBookMarked style={{ fontSize: "26px" }} />,
    },
    {
      name: "Option",
      content: "Lorem ipsum dolor sit amet consectetur.",
      svg: <PiStudent style={{ fontSize: "26px" }} />,
    },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-50px",
  });

  return (
    <section className="mx-auto container px-4 md:px-0">
      <div className="w-full py-8 sm:py-12 lg:py-24">
        <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
          <div className="text-left h-full flex items-start flex-col justify-center w-full">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Les cours dispensés
            </h2>

            <p className="mt-4 text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut vero
              aliquid sint distinctio iure ipsum cupiditate? Quis, odit
              assumenda? Deleniti quasi inventore, libero reiciendis minima
              aliquid tempora. Obcaecati, autem.
            </p>

            <a
              href="#contenu"
              className="mt-8 inline-block rounded bg-[#DB4105] px-12 py-3 text-sm font-medium text-white transition hover:bg-white hover:text-[#DB4105] hover:border-[#DB4105] hover:border"
            >
              Voir le contenu des cours
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {lessons.map((lesson, index) => (
              <motion.div
                key={index}
                ref={ref}
                variants={fadeInUp}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="block rounded-xl hover:bg-white bg-gray-50 border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
              >
                <span className="inline-block rounded-lg bg-gray-50 p-3">
                  {lesson.svg}
                </span>

                <h2 className="mt-2 font-bold">{lesson.name}</h2>

                <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                  {lesson.content}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Lessons;
