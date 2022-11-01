import Image from "next/image";
import React from "react";
import CardRelatos from "../CardRelatos";

function SecondSection() {
  return (
    <div className="container mx-auto mt-14">
      <div className="flex flex-col justify-center items-center">
        <Image src="/icon-aspas.svg" alt="aspas" width={"60"} height={"89"} />
        <div className="w-[518px] mt-5">
          <h1 className="text-[#EC715F] text-[39px] leading-[48.56px] font-bwbeto text-center">
            Relatos de mulheres que praticam Ginástica íntima
          </h1>
        </div>
      </div>
      <div className="w-10/12 mx-auto flex">
        <div className="w-6/12 flex flex-col gap-16 -mt-7">
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
        <div className="w-6/12 flex flex-col gap-16 mt-14">
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
