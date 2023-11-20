import React, { useState } from "react";

const Faq = () => {
  const [activeQuestion, setActiveQuestion] = useState(0);

  const questions = [
    {
      title: "Lorem ipsum dolor sit amet consectetur adipisicing?",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo consequuntur distinctio corporis earum similique!",
    },
    {
      title: "Lorem ipsum dolor sit amet consectetur adipisicing?",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo consequuntur distinctio corporis earum similique!",
    },
    {
      title: "Lorem ipsum dolor sit amet consectetur adipisicing?",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo consequuntur distinctio corporis earum similique!",
    },
    {
      title: "Lorem ipsum dolor sit amet consectetur adipisicing?",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo consequuntur distinctio corporis earum similique!",
    },
    {
      title: "Lorem ipsum dolor sit amet consectetur adipisicing?",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo consequuntur distinctio corporis earum similique!",
    },
  ];
  return (
    <div className="space-y-4 mx-auto container py-20">
      <h2 className="text-4xl text-large">Foire aux questions</h2>
      {questions.map((question, index) => (
        <div keu={index} onClick={() => setActiveQuestion(index)}>
          <div className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-100 p-4 text-gray-900 delay-400	transition-transform	ease-in-out	">
            <h2 className="font-medium">{question.title}</h2>
            <svg
              className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
          <p
            className={`mt-4 px-4 leading-relaxed text-gray-700 ${
              activeQuestion === index ? "flex" : "hidden"
            }`}
          >
            {question.content}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Faq;
