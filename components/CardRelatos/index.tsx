import Image from "next/image";
import React from "react";
import AppImage from "../AppImage";

interface Props {
  img: string;
  title: string;
  widthImg: number;
  heightImg: number;
}

function CardRelatos({ img, title, widthImg, heightImg }: Props) {
  return (
    <div>
      <div className="w-[558px]">
        <div className="bg-[#EC715F] w-[280px] mx-auto rounded-[7px]">
          <p className="text-center py-3 px-5 text-[20px] font-bold leading-6">
            {title}
          </p>
        </div>
        {/* <img src={`/${img}`} className="shadow-lg rounded mt-5" alt="" /> */}

        <AppImage
          src={`/${img}`}
          className="shadow-lg rounded mt-5"
          dimensions={{
            default: [widthImg, heightImg],
            proportionalHeight: true,
            sm: 383.81,
          }}
        />
      </div>
    </div>
  );
}

export default CardRelatos;
