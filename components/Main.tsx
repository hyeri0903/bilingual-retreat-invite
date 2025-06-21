import Link from "next/link";

export default function Main() {
  return (
    <section className="w-full min-h-screen flex flex-col justify-start items-center pt-10 px-4 bg-white relative overflow-hidden">
      {/* 배경 비디오 */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover  max-w-none"
      >
        <source src="/bilingual.MP4" type="video/mp4" />
        Your browser does not support the video tag.
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
