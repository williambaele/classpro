import React, { useEffect } from "react";
import HeroPicture from "../assets/images/student.jpg";
import { motion, useAnimation } from "framer-motion";

const Hero = () => {
  const backgroundImageStyle = {
    backgroundImage: `url(${HeroPicture})`,
    filter: "grayscale(0%)",
    height: "calc(100vh - 64px)",
  };

  const controls = useAnimation();

  useEffect(() => {
    // Start the animation when the component mounts
    controls.start({ x: 0 });
  }, [controls]);

  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat"
      style={backgroundImageStyle}
    >
      <div className="absolute inset-0 bg-white/65 sm:bg-transparent sm:from-white/25 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>
      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex h-full lg:items-center lg:px-8 flex items-center">
        <div className="w-full md:w-2/3 text-left">
          <h1 className="text-5xl text-white font-extrabold md:text-7xl">
            Développez votre
            <strong className="block font-extrabold text-[#DB4105]">
              plein potentiel.
            </strong>
          </h1>

          <p className="mt-4 max-w-lg sm:text-xl/relaxed text-white">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
            illo tenetur fuga ducimus numquam ea!
          </p>

          <motion.div
            className="mt-8 flex flex-wrap gap-4 text-center"
            initial={{ x: -100 }}
            animate={controls}
            transition={{ type: "spring", stiffness: 100 }}
          >
            <a
              href="#"
              className="block w-full rounded bg-[#DB4105] px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
            >
              S'inscrire
            </a>

            <a
              href="#"
              className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-[#DB4105] shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
            >
              Learn More
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
