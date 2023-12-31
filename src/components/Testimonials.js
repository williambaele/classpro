import React, { useState } from "react";

const Testimonials = () => {
  const testimonials = [
    {
      title: "Super prof",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis vehicula erat sed lobortis. Nulla tristique scelerisque enim sit amet facilisis.",
      author: "John Doe",
    },
    {
      title: "Super prof",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis vehicula erat sed lobortis. Nulla tristique scelerisque enim sit amet facilisis.",
      author: "John Doe",
    },
    {
      title: "Super prof",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis vehicula erat sed lobortis. Nulla tristique scelerisque enim sit amet facilisis.",
      author: "John Doe",
    },
    {
      title: "Super prof",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis vehicula erat sed lobortis. Nulla tristique scelerisque enim sit amet facilisis.",
      author: "John Doe",
    },
    {
      title: "Super prof",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis vehicula erat sed lobortis. Nulla tristique scelerisque enim sit amet facilisis.",
      author: "John Doe",
    },
    {
      title: "Super prof",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Morbi sagittis vehicula erat sed lobortis. Nulla tristique scelerisque enim sit amet facilisis.",
      author: "John Doe",
    },
  ];

  //RESTRICT TESTIMONIALS TO 3 ITEMS ON INITIAL
  const [displayedTestimonials, setDisplayedTestimonials] = useState(3);
  const handleReadAllClick = () => {
    setDisplayedTestimonials(testimonials.length);
  };

  return (
    <div class="bg-gray-100" id="temoignages">
      <div class="py-16 mx-auto container px-4 md:px-0">
        <div class="md:flex md:items-end md:justify-between">
          <div class="max-w-xl">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Nos anciens élèves témoignent
            </h2>

            <p class="mt-6 w-full leading-relaxed text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur praesentium natus sapiente commodi. Aliquid sunt
              tempore iste repellendus explicabo dignissimos placeat, autem
              harum dolore reprehenderit quis! Quo totam dignissimos earum.
            </p>
          </div>

          <button
            onClick={handleReadAllClick}
            class="mt-6 rounded bg-[#DB4105] px-12 py-3 text-sm font-medium text-white transition hover:bg-white hover:text-[#DB4105] hover:border-[#DB4105] hover:border flex items-center gap-2"
          >
            <span class="font-medium"> Voir tous les témoignages </span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4 rtl:rotate-180"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>
        </div>
        <div class="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          {testimonials.slice(0, displayedTestimonials).map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-sm flex h-full flex-col justify-between p-6 shadow-sm sm:p-8 rounded-md hover:bg-white hover:border"
            >
              <div>
                <div class="flex gap-0.5 text-green-500">
                  <svg
                    class="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>

                  <svg
                    class="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>

                  <svg
                    class="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>

                  <svg
                    class="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>

                  <svg
                    class="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>

                <div class="mt-4">
                  <p class="text-2xl font-bold text-[#DB4105] sm:text-3xl">
                    {item.title}
                  </p>

                  <p class="mt-4 leading-relaxed text-gray-700">
                    {item.content}
                  </p>
                </div>
              </div>

              <footer class="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
                &mdash; {item.author}
              </footer>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
