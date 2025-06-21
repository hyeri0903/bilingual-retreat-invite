"use client";

import { motion } from "framer-motion";

export default function Details() {
  // TODO: 이 URL을 실제 카카오뱅크 송금 링크로 교체
  const kakaoBankUrl =
    "https://link.kakaobank.com/send/transfer-web?app_if=kakaobank";

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      alert("계좌번호가 복사되었습니다!");
    } catch (err) {
      console.error("클립보드 복사 실패:", err);
    }
  };

  return (
    <section className="w-full min-h-screen mx-auto flex flex-col bg-gray-50 dark:bg-gray-900">
      <div className="flex justify-center items-center mt-10">
        <h2 className="font-bold text-3xl sm:text-3xl md:text-4xl lg:text-5xl text-center mb-10 text-gray-900 dark:text-white">
          Details
          <div className="mt-4 w-20 h-0.5 bg-gray-200 dark:bg-gray-700 mx-auto mb-3 rounded" />
        </h2>
      </div>
      {/* 1부 - 오른쪽 배치 */}
      <div className="flex flex-col md:flex-row">
        <motion.img 
            src="/heartcake.jpg" 
            alt="1부 이미지" 
            className="w-full md:w-[790px] h-[600px] object-cover"
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
        />
        <div className="flex-1 flex flex-col justify-center items-center p-4 md:p-0">
          <div className="text-center mb-5">
            <div className="text-xl font-bold text-gray-600 dark:text-white">
              Participation Fee
            </div>
            <div className="mt-3 w-16 h-0.5 bg-gray-600 dark:bg-white rounded mx-auto"></div>
          </div>
          <div>
            <div className="space-y-1 text-gray-700 dark:text-gray-200 text-center md:text-left">
              <div className="text-gray-700 dark:text-gray-200 text-center mb-6">
                We're asking for 20,000 won fee to join the bilingual retreat! 
                <div 
                  className="text-gray-700 dark:text-gray-200 text-center mt-5 underline cursor-pointer"
                  onClick={() => copyToClipboard("3333-0000-1234-5667")}
                >
                카카오뱅크 3333-0000-1234-5667
                </div>
              </div>
             
              <div className="flex justify-center mt-5">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="bg-gray-200 hover:bg-yellow-500 text-black font-bold py-3 px-8 text-lg rounded-lg"
                >
                  <a
                    href={kakaoBankUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Wire to KakaoBank
                  </a>
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2부 - 왼쪽 배치 */}
      <div className="flex flex-col md:flex-row">
        <div className="flex-1 flex flex-col justify-center items-center p-4 md:p-0 order-2 md:order-1">
          <div className="text-center mb-5">
            <div className="text-xl font-bold text-gray-600 dark:text-white">
              Note
            </div>
            <div className="mt-3 w-16 h-0.5 bg-gray-600 dark:bg-white rounded mx-auto"></div>
          </div>
          <div>
            <div className="space-y-1 text-gray-700 dark:text-gray-200 text-center md:text-left">
              <div>You can leave anytime!</div>
            </div>
          </div>
        </div>
        <motion.img 
            src="/flower.jpg" 
            alt="2부 이미지" 
            className="w-full md:w-[790px] h-[600px] object-cover order-1 md:order-2"
            initial={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          />
        </div>
    </section>
  );
}
