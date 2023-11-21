import React from "react";
import Logo from "../assets/images/logo.png";
import { CiMail } from "react-icons/ci";
import { FaPhone } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer class="bg-white border-t border-gray-200">
      <div class="mx-auto container space-y-8 px-4 md:px-0 py-16">
        <div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <div class="w-1/3 md:w-1:2">
              <img src={Logo} className="object-contain h-full" alt="Logo" />
            </div>

            <p class="mt-4 w-full text-gray-500">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse non
              cupiditate quae nam molestias.
            </p>

            <ul class="mt-8 flex gap-6">
              <li>
                <a
                  href="/"
                  rel="noreferrer"
                  target="_blank"
                  class="text-gray-700 transition hover:text-[#DB4105]"
                >
                  <span class="sr-only">Facebook</span>

                  <svg
                    class="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
              </li>

              <li>
                <a
                  href="/"
                  rel="noreferrer"
                  target="_blank"
                  class="text-gray-700 transition hover:text-[#DB4105]"
                >
                  <span class="sr-only">Instagram</span>

                  <svg
                    class="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          <div class="md:col-span-2 grid grid-cols-2">
            <div>
              <p class="font-medium text-gray-900">Liens utiles</p>

              <ul class="mt-6 space-y-4 text-sm">
                <li>
                  <a
                    href="#fonctionnement"
                    class="text-gray-700 transition hover:opacity-75"
                  >
                    Notre méthode
                  </a>
                </li>

                <li>
                  <a
                    href="#temoignages"
                    class="text-gray-700 transition hover:opacity-75"
                  >
                    Témoignages
                  </a>
                </li>

                <li>
                  <a
                    href="#contenu"
                    class="text-gray-700 transition hover:opacity-75"
                  >
                    Contenu des cours
                  </a>
                </li>

                <li>
                  <a
                    href="#contact"
                    class="text-gray-700 transition hover:opacity-75"
                  >
                    S'inscrire
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p class="font-medium text-gray-900">Contact</p>

              <ul class="mt-6 space-y-4 text-sm">
                <li>
                  <a
                    href="https://maps.google.com/maps"
                    class="text-gray-700 transition hover:opacity-75 flex gap-2 items-center"
                  >
                    <FaMapMarkerAlt />
                    Rue de l'étudiant
                  </a>
                </li>

                <li>
                  <a
                    href="tel:++32 488 76 22 29"
                    class="text-gray-700 transition hover:opacity-75 flex gap-2 items-center"
                  >
                    <FaPhone />
                    +32 488 76 22 29
                  </a>
                </li>

                <li>
                  <a
                    href="mailto:prepamed@classpro.be"
                    class="text-gray-700 transition hover:opacity-75 flex gap-2 items-center"
                  >
                    <CiMail />
                    prepamed@classpro.be
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <p class="text-xs text-gray-500">
          &copy; 2023. Template développé par William Baele
        </p>
      </div>
    </footer>
  );
};

export default Footer;
