'use client';

import React, { useEffect } from "react";
import MapInfo from "./MapInfo";
import { aosProps } from "utils/aosConfig";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Content () {
  useEffect(() => {
    AOS.init()
  }, []);

  return (
    <section className="w-full min-h-screen mx-auto flex flex-col justify-center items-center bg-white dark:bg-black transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center w-full mt-10">
          <div>Join us for the</div>
          <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-black dark:text-white mb-4 text-center w-full">
            Bilingual Retreat
          </h2>
          <div {...aosProps} className="mt-8 text-xl text-black dark:text-white text-center w-full">
            <div className="font-bold text-lg">WHEN</div>
            <p className="text-xl text-gray-700 dark:text-white mt-2">
              2025.06.28 7:00 PM - 2025.06.29 09:00 AM
            </p>
          </div>
          <div {...aosProps} className="mt-8 text-xl text-black dark:text-white text-center w-full">
            <div className="font-bold text-lg">WHERE</div>
            <div className="text-large font-bold text-gray-700 dark:text-white mt-2">
              <MapInfo />
            </div>
          </div>
          <div {...aosProps} className="mt-8 text-xl text-black dark:text-white text-center w-full">
            <div className="font-bold text-lg">CONTACT</div>
            <p className="text-large text-gray-700 dark:text-white mt-2">
              Harry & Franko
            </p>
          </div>
        </div>
        <div className="mb-20"></div>
      </div>
    </section>
  );
};

