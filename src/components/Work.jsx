import React from "react";
import { data } from "../data/data.js";

const Work = () => {
  const project = data;

  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        {/* Section Title */}
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Work
          </p>
          <p className="py-6">Check out some of my recent work</p>
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {project.map((item, index) => (
            <div
              key={index}
              className="relative group rounded-md overflow-hidden shadow-lg shadow-[#040c16] transition-transform transform hover:scale-105"
            >
              {/* Image Container */}
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover object-center"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center transition-opacity">
                <span className="text-2xl font-bold text-white tracking-wider mb-4">
                  {item.name}
                </span>
                <div className="flex space-x-4">
                  {/* Code Button */}
                  <a
                    href={item.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="rounded-lg px-4 py-2 bg-white text-gray-700 font-bold text-lg">
                      Code
                    </button>
                  </a>
                  {/* Live Button */}
                  <a href={item.live} target="_blank" rel="noopener noreferrer">
                    <button className="rounded-lg px-4 py-2 bg-white text-gray-700 font-bold text-lg">
                      Live
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
