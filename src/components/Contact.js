import React from "react";
import { CiMail } from "react-icons/ci";
import { FaPhone } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
const Contact = () => {
  const infos = [
    {
      name: "Rue de l'étudiant, 1000 Bruxelles",
      svg: <FaMapMarkerAlt style={{ fontSize: "24px" }} />,
      path: "https://maps.google.com/maps",
    },
    {
      name: "prepamed@classpro.be",
      svg: <CiMail style={{ fontSize: "24px" }} />,
      path: "mailto:prepamed@classpro.be",
    },
    {
      name: "+32 488 76 22 29",
      svg: <FaPhone style={{ fontSize: "24px" }} />,
      path: "tel:+32488762229",
    },
  ];
  return (
    <div className="bg-gray-100 py-16" id="contact">
      <div className="flex flex-col space-y-4 container mx-auto px-4 md:px-0 mb-10 text-center">
        <h2 className=" text-3xl font-bold text-gray-900 sm:text-4xl">
          Inscrivez-vous et passez votre jury central
        </h2>
        <p>
          Quisque bibendum elit malesuada risus pulvinar, non scelerisque ligula
          viverra. Suspendisse sit amet tellus eget urna placerat porta. Nam
          accumsan, dui sit amet mollis egestas, est sapien pretium nulla, vitae
          eleifend elit lectus at est.
        </p>
      </div>
      <div className="mx-auto container px-4 md:px-0">
        <div className="grid grid-cols-1 gap-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {infos.map((info, index) => (
              <Link to={info.path}>
                <div
                  key={index}
                  className="shadow-xs rounded-md bg-white p-2 md:p-6 flex flex-col gap-2 md:gap-6 items-center  hover:bg-[#DB4105] hover:text-white cursor-pointer"
                >
                  {info.svg}
                  {info.name}
                </div>
              </Link>
            ))}
          </div>

          <div className="rounded-lg bg-white p-8 shadow-lg  lg:p-12 md:col-span-2">
            <form action="" className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <input
                  className="w-full rounded-lg border-gray-200 p-3 text-sm border border-gray-200"
                  placeholder="Nom"
                  type="text"
                />
                <input
                  className="w-full rounded-lg border-gray-200 p-3 text-sm border border-gray-200"
                  placeholder="Prénom"
                  type="text"
                />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm border border-gray-200"
                    placeholder="Adresse email"
                    type="email"
                    id="email"
                  />
                </div>

                <div>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm border border-gray-200"
                    placeholder="Numéro de téléphone"
                    type="tel"
                    id="phone"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-2">
                <div>
                  <input
                    className="peer sr-only"
                    id="option1"
                    type="radio"
                    tabindex="-1"
                    name="option"
                  />

                  <label
                    for="option1"
                    className="block w-full rounded-lg border border-gray-200 p-3 text-gray-600  peer-checked:bg-[#DB4105] peer-checked:text-white"
                    tabindex="0"
                  >
                    <span className="text-sm"> Je souhaite m'inscrire </span>
                  </label>
                </div>

                <div>
                  <input
                    className="peer sr-only"
                    id="option2"
                    type="radio"
                    tabindex="-1"
                    name="option"
                  />

                  <label
                    for="option2"
                    className="block w-full rounded-lg border border-gray-200 p-3 text-gray-600  peer-checked:bg-[#DB4105] peer-checked:text-white"
                    tabindex="0"
                  >
                    <span className="text-sm"> Autre </span>
                  </label>
                </div>
              </div>

              <div>
                <label className="sr-only" for="message">
                  Message
                </label>

                <textarea
                  className="w-full rounded-lg border-gray-200 p-3 text-sm border border-gray-200"
                  placeholder="Message"
                  rows="8"
                  id="message"
                ></textarea>
              </div>

              <div class="mt-4">
                <button
                  type="submit"
                  class="inline-block w-full rounded-lg bg-[#DB4105] px-5 py-3 font-medium text-white sm:w-auto"
                >
                  Envoyer
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
