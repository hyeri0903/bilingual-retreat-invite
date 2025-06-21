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

  const kakaoBankAlert = () =>  {
    alert('아직 준비중입니다.');
  }

  return (
    <section className="w-full min-h-screen mx-auto flex flex-col bg-gray-50">
      <div className="flex justify-center items-center mt-10">
        <h2 className="font-bold text-3xl sm:text-3xl md:text-4xl lg:text-5xl text-center mb-10 text-gray-900">
          Details
          <div className="mt-4 w-20 h-0.5 bg-gray-200 mx-auto mb-3 rounded" />
        </h2>
      </div>
      {/* 1부 - 오른쪽 배치 */}
      <div className="flex flex-col md:flex-row">
        <motion.img
          src="/franko.png"
          alt="1부 이미지"
          // className="w-full md:w-[790px] h-[600px] object-cover"
          className="w-full max-w-[200px] md:max-w-[400px] h-auto object-cover rounded-xl"
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        />
        <div className="mt-10 mb-10 flex-1 flex flex-col justify-center items-center p-4 md:p-0">
          <div className="text-center mb-5">
            <div className="text-xl font-bold text-gray-600">
              Entry Fee
            </div>
            <div className="mt-3 w-16 h-0.5 bg-gray-600 rounded mx-auto"></div>
          </div>
          <div>
            <div className="space-y-1 text-gray-700 text-center md:text-left">
              <div className="text-gray-700 text-center mb-6">
                We're asking for 30,000 won contribution for the bilingual retreat!
                <div
                  className="text-gray-700 text-center mt-5 underline cursor-pointer"
                  onClick={() => copyToClipboard("3333323237518")}
                >
                  카카오뱅크 3333-32-3237518
                </div>
              </div>

              <div className="flex justify-center mt-5">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="bg-gray-200 hover:bg-yellow-500 text-black font-bold py-3 px-8 text-lg rounded-lg"
                  onClick={kakaoBankAlert}
                >
                  Wire to KakaoBank
                  {/* <a
                    href={kakaoBankUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Wire to KakaoBank
                  </a> */}
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2부 - 왼쪽 배치 */}
      <div className="flex flex-col md:flex-row">
        <div className="mt-10 mb-10  flex-1 flex flex-col justify-center items-center p-4 md:p-0 order-2 md:order-1">
          <div className="text-center mb-5">
            <div className="text-xl font-bold text-gray-600">
              Note
            </div>
            <div className="mt-3 w-16 h-0.5 bg-gray-600 rounded mx-auto"></div>
          </div>
          <div>
            <div className="space-y-1 text-gray-700 text-center md:text-left">
              <div>You can leave anytime!</div>
            </div>
          </div>
        </div>
        <motion.img
          src="/harry.png"
          alt="2부 이미지"
          className="w-full max-w-[200px] md:max-w-[400px] h-auto object-cover rounded-xl order-1 md:order-2 ml-auto"
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        />
      </div>
    </section>
  );
}
