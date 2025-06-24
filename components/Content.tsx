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
    <section className="w-full min-h-screen mx-auto flex flex-col justify-center items-center bg-white transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center w-full mt-10">
          <div>Join us for the</div>
          <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-black mb-4 text-center w-full">
            BILINGUAL RETREAT
          </h2>
          <div
            {...aosProps}
            data-aos-delay="0"
            className="mt-8 text-xl text-black text-center w-full"
          >
            <div className="font-bold text-lg">WHEN</div>
            <p className="text-xl text-gray-700 mt-2">
              
              2025.06.28 (SAT) 7:00 PM 
              <span className="sm:hidden"><br/></span>
              -
              <span className="sm:hidden"><br/></span>
              2025.06.29 (SUN) 08:00 AM 
              
            </p>
          </div>
          <div
            {...aosProps}
            data-aos-delay="200"
            className="mt-8 text-xl text-black text-center w-full"
          >
            <div className="font-bold text-lg">WHERE</div>
            <div className="text-gray-700 mt-2 text-lg">
              <div>
                강남대로 101길 20 4층 (신사역 5번 출구)
              </div>
              <MapInfo />
            </div>
          </div>
          <div
            {...aosProps}
            className="mt-8 text-xl text-black text-center w-full"
          >
            <div className="text-base">If you’d like to join the Bilingual Retreat</div>
            <div className="font-bold text-lg text-blue-500 underline cursor-pointer">
              <a href="https://forms.gle/SL5qxPZmjRBFctdY9" target="_blank" rel="noopener noreferrer">
                Please submit this form
              </a>
            </div>
          </div>
        </div>
        <div className="mb-20"></div>
      </div>
    </section>
  );
};

