import React from "react";
import Student1 from "../assets/images/multi-students.jpg";
import Student2 from "../assets/images/student2.jpg";

const HowItWorks = () => {
  return (
    <section className="bg-white" id="fonctionnement">
      <div className="gap-16 items-center py-8 md:px-0 px-4 mx-auto container lg:grid lg:grid-cols-2 py-16 ">
        <div className="font-light text-gray-500 sm:text-lg space-y-4">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Notre méthode d'apprentissage
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
          <img
            className="w-full rounded-lg h-80 object-cover"
            src={Student1}
            alt="Students"
          />

          <img
            className="w-full lg:mt-10  rounded-lg h-80 object-cover"
            src={Student2}
            alt="Student"
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
