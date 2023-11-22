import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Student1 from "../assets/images/multi-students.jpg";
import Student2 from "../assets/images/student2.jpg";

const HowItWorks = () => {
  const fadeInVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section ref={ref} className="bg-white" id="fonctionnement">
      <div className="gap-16 items-center py-8 md:px-0 px-4 mx-auto container lg:grid lg:grid-cols-2 py-16 ">
        <div className="font-light text-gray-500 sm:text-lg space-y-4">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Réussissez brillamment votre jury central
          </h2>
          <p className="mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut vero
            aliquid sint distinctio iure ipsum cupiditate? Quis, odit assumenda?
            Deleniti quasi inventore, libero reiciendis minima aliquid tempora.
            Obcaecati, autem.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut vero
            aliquid sint distinctio iure ipsum cupiditate? Quis, odit assumenda?
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <motion.img
            variants={fadeInVariant}
            initial="hidden"
            animate={controls}
            transition={{ duration: 2 }}
            className="w-full rounded-lg h-80 object-cover"
            src={Student1}
            alt="Students"
          />

          <motion.img
            variants={fadeInVariant}
            initial="hidden"
            animate={controls}
            transition={{ duration: 2 }}
            className="w-full lg:mt-10 rounded-lg h-80 object-cover"
            src={Student2}
            alt="Student"
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
