import Image from "next/image";
import React from "react";
import CardRelatos from "../CardRelatos";

function SecondSection() {
  return (
    <div className="container mx-auto mt-14">
      <div className="flex flex-col justify-center items-center lg:w-full w-11/12 mx-auto">
        <Image
          className="lg:flex hidden"
          src="https://lp.toquefeminino.com.br/pp-new/ginastica-intima-pompoarismo-b/icon-aspas.svg"
          alt="aspas"
          width={"60"}
          height={"89"}
        />
        <Image
          className="lg:hidden flex"
          src="https://lp.toquefeminino.com.br/pp-new/ginastica-intima-pompoarismo-b/icon-aspas.svg"
          alt="aspas"
          width={39.5}
          height={58.59}
        />
        <div className="lg:w-[518px] mt-5 lg:mb-0 mb-5">
          <h1 className="text-[#EC715F] lg:text-[39px] text-[28px] lg:leading-[48.56px] leading-[124.5%] font-bwbeto text-center">
            Relatos de mulheres que praticam Ginástica íntima
          </h1>
        </div>
      </div>
      <div className="2xl:w-11/12 lg:w-full w-full mx-auto lg:flex justify-center">
        <div className="lg:w-6/12 w-11/12 mx-auto flex flex-col gap-16 lg:-mt-7 items-center">
          <CardRelatos
            widthImg={558}
            heightImg={210.57}
            title="Saúde Íntima"
            img="relato-1.png"
          />
          <CardRelatos
            title="Você no comando, eles vão ao delírio "
            img="relato-2.png"
            widthImg={567}
            heightImg={185.81}
          />
        </div>
        <div className="lg:w-6/12 w-11/12 flex flex-col gap-16 mt-14 items-center">
          <CardRelatos
            title="Orgasmos Intensos"
            img="relato-3.png"
            widthImg={545}
            heightImg={205.66}
          />
          <CardRelatos
            title="Saúde íntima e relações + intensas"
            img="relato-4.png"
            widthImg={555}
            heightImg={209.99}
          />
        </div>
      </div>
    </div>
  );
}

export default SecondSection;
