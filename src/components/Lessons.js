import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Lessons = () => {
  const lessons = [
    {
      name: "Sciences",
      content: "Lorem ipsum dolor sit amet consectetur.",
      svg: "",
    },
    {
      name: "Mathématiques",
      content: "Lorem ipsum dolor sit amet consectetur.",
      svg: "",
    },
    {
      name: "Français",
      content: "Lorem ipsum dolor sit amet consectetur.",
      svg: "",
    },
    {
      name: "Géographie",
      content: "Lorem ipsum dolor sit amet consectetur.",
      svg: "",
    },
    {
      name: "Histoire",
      content: "Lorem ipsum dolor sit amet consectetur.",
      svg: "",
    },
    {
      name: "Option",
      content: "Lorem ipsum dolor sit amet consectetur.",
      svg: "",
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
              href="#"
              className="mt-8 inline-block rounded bg-[#DB4105] px-12 py-3 text-sm font-medium text-white transition hover:bg-[#DB4105]/90 focus:outline-none focus:ring focus:ring-yellow-400"
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
                  <svg
                    class="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                    ></path>
                  </svg>
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
