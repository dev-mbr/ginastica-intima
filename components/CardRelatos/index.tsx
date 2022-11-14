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
      <div className="lg:w-[558px]">
        <div className="bg-[#EC715F] lg:w-[280px] w-[192.59px] mx-auto rounded-[7px]">
          <p className="text-center lg:py-3 py-2 px-5 lg:text-[20px] text-[13.7566px] font-bold lg:leading-6 leading-[17px]">
            {title}
          </p>
        </div>

        <AppImage
          src={`https://lp.toquefeminino.com.br/pp-new/ginastica-intima-pompoarismo-b/${img}`}
          className="shadow-lg rounded mt-5"
          dimensions={{
            default: [widthImg, heightImg],
            proportionalHeight: true,
            sm: 340,
          }}
        />
      </div>
    </div>
  );
}

export default CardRelatos;
