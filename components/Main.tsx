'use client';

import Link from "next/link";
import { useEffect, useRef } from "react";

export default function Main() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      // 비디오 로딩 완료 후 재생 시도
      const handleCanPlay = () => {
        console.log('비디오 재생 시도 중...');
        video.play()
          .then(() => {
            console.log('비디오 재생 성공!');
          })
          .catch((error) => {
            console.error('비디오 재생 실패:', error);
          });
      };

      video.addEventListener('canplay', handleCanPlay);
      
      // 즉시 재생 시도
      video.play()
        .then(() => {
          console.log('즉시 재생 성공!');
        })
        .catch((error) => {
          console.log('즉시 재생 실패, canplay 이벤트 대기:', error);
        });

      return () => {
        video.removeEventListener('canplay', handleCanPlay);
      };
    }
  }, []);

  return (
    <section className="w-full min-h-screen flex flex-col justify-start items-center pt-10 px-4 bg-white relative overflow-hidden">
      {/* 배경 비디오 */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover max-w-none"
        onError={(e) => console.error('비디오 로딩 에러:', e)}
        onLoadStart={() => console.log('비디오 로딩 시작')}
        onCanPlay={() => console.log('비디오 재생 가능')}
      >
        <source src="/bilingual-background.mp4" type="video/mp4" />
      </video>

      {/* 배경 오버레이 추가 (텍스트 가독성을 위해) */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* 콘텐츠를 오버레이 위에 표시 */}
      <div className="relative z-1 flex flex-col items-center">
        <div className="font-sans text-2xl text-white">You're invited to</div>
        <h1 className="font-sans font-bold tracking-tighter text-6xl sm:text-7xl md:text-8xl lg:text-8xl text-white mb-3 text-center">
          Bilingual Retreat
        </h1>
        <p className="font-sans text-xl text-white mb-12 font-light">
          Saturday 28th June 2025
        </p>
      </div>

      {/* 아래 방향 화살표 설정) */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce z-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </section>
  );
}
