import React, { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "react-spring";

const Numbers = () => {
  const numbers = [
    {
      title: "Étudiants aidés",
      number: 258,
    },
    {
      title: "Matières dispensées",
      number: 6,
    },
    {
      title: "Professeurs dévoués",
      number: 32,
    },
  ];

  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.9 });

  const AnimatedNumber = ({ value }) => {
    const springValue = useSpring({
      number: inView ? value : 0,
      from: { number: 0 },
      reset: true,
    });

    return (
      <animated.span>
        {springValue.number.interpolate((val) =>
          Intl.NumberFormat("en-US").format(val.toFixed(0))
        )}
      </animated.span>
    );
  };

  useEffect(() => {
    if (inView) {
    }
  }, [inView]);

  return (
    <div className="bg-gray-50">
      <div className="mx-auto container px-4 md:px-0">
        <div className="py-12 md:py-16">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Méthodologie bien ficellée
            </h2>

            <p className="mt-4 text-gray-500 sm:text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              dolores laborum labore provident impedit esse recusandae facere
              libero harum sequi.
            </p>
          </div>

          <div className="mt-8 sm:mt-12" ref={ref}>
            <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {numbers.map((number, index) => (
                <div
                  key={index}
                  className="flex flex-col rounded-lg bg-white shadow-sm px-4 py-8 text-center hover:scale-105"
                >
                  <dt className="order-last text-lg font-medium text-gray-500">
                    {number.title}
                  </dt>

                  <dd className="text-4xl font-extrabold text-[#DB4105] md:text-5xl">
                    <AnimatedNumber value={number.number} />
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Numbers;
