"use client";

import Image from "next/image";

// BannerProps 타입 정의
type BannerProps = {
  imgSrc: string;
  title?: string;
  description?: string;
  label?: string;
  width?: string; // 배너의 너비
  height?: string; // 배너의 높이
};

export default function Banner({
  imgSrc,
  title,
  description,
  label,
  width = "100%",
  height = "auto",
}: BannerProps) {
  return (
    <div
      className="flex items-center p-6 shadow-lg mx-auto my-10 bg-center"
      style={{
        width: width,
        height: height,
        backgroundImage: `url(${imgSrc})`,
        backgroundSize: "contain", // 비율유지
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#FCEEE3", // 빈공간 배경색
      }}
    >
      <div className="flex items-center space-x-4">
        {label && ( // 라벨이 있을 때만 렌더링
          <div className="bg-[#f1bcae] text-white text-sm font-semibold p-2 rounded-full">
            {label}
          </div>
        )}
      </div>

      {/* 텍스트 있을때만 렌더링 */}
      <div className="flex-1 ml-8">
        {title && <h2 className="text-4xl font-bold text-gray-800">{title}</h2>}
        {description && <p className="text-gray-600 mt-2">{description}</p>}
      </div>
    </div>
  );
}
