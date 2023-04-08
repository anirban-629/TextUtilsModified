import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <div className="p-16">
        <div className="p-8 bg-white shadow mt-24">
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="grid grid-cols-3 text-center order-last md:order-first"></div>
            <div className="relative">
              <div className="w-48 h-48  mx-auto rounded-full absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
                <img className="rounded-full" src="/images/dp.jpg" alt="" />
              </div>
            </div>
            <div className="flex justify-center mt-32 md:mt-0 md:justify-center">
              <Link
                to="https://www.linkedin.com/in/anirban-mishra-a7a2a91a2/"
                target="_blank"
                rel="noreferrer"
              >
                <button className="text-white py-2 px-4 uppercase rounded bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                  Connect
                </button>
              </Link>
            </div>
          </div>
          <div className="mt-20 text-center border-b pb-12">
            <h1 className="text-4xl font-medium text-gray-700">
              Anirban Mishra
              <span className="font-light text-gray-500">, 20</span>
            </h1>
            <p className="font-light text-gray-600 mt-3">
              Baruipur, Kolkata-700144
            </p>
            <p className="mt-8 text-gray-500">
              Student - Department of Computer Science & Engineering
            </p>
            <p className="mt-2 text-gray-500">
              Maulana Abul Kalam Azad University of Technology
            </p>
          </div>
          <div className="mt-12 flex flex-col justify-center">
            <p className="text-gray-600 text-center font-light lg:px-16">
              Computer Science & Engineering student, who is passionate about
              learning and seeking corporate experience to apply the technical
              skills learned through academic knowledge and improvise, showcase
              the skills, and contribute to the company's growth.
            </p>
            <button className="text-indigo-500 py-2 px-4  font-medium mt-4">
              <Link
                to="https://portfolio-anirban.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                Contact Me
              </Link>
            </button>
          </div>
        </div>
      </div>
      s
    </div>
  );
};

export default About;
