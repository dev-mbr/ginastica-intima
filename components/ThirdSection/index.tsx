import Image from "next/image";
import React from "react";

function ThirdSection() {
  return (
    <div className="bg-final mt-24">
      <div className="container mx-auto h-full">
        <div className="w-10/12 flex h-full">
          <div className="w-8/12 relative flex justify-center">
            <Image
              className="absolute -top-[90px]"
              width={504.07}
              height={504.07}
              src="/catia-final.png"
              alt=""
            />
          </div>
          <div className="w-4/12 h-full flex flex-col justify-center">
            <div className="w-[466px]">
              <h1 className="text-[39px] font-bwbeto leading-[48.56px] font-bold">
                “Minha missão é despertar na mulher o que ela tem de melhor”
              </h1>
            </div>
            <div className="2xl:w-[608px] lg:w-[500px] mt-[22px]">
              <p className="text-[22px] leading-[28.93px] font-medium">
                Cátia Damasceno é fisioterapeuta, especializada em
                uroginecologia e iniciou seu trabalho ensinando exercícios de
                ginástica íntima para o fortalecimento da musculatura de
                mulheres com problemas de flacidez íntima após o parto. Desde
                então, se especializou em ginástica íntima feminina e, ao longo
                de 12 anos, seus cursos e palestras já ajudaram milhares de
                mulheres em todo o Brasil.
              </p>
            </div>
            <div className="2xl:w-[608px] lg:w-[500px] mt-[28px]">
              <p className="text-[22px] leading-[28.93px] font-medium">
                Cátia ajuda as mulheres a se sentirem mais seguras, confiantes e
                bem-resolvidas nas suas relações amorosas e íntimas, com
                independência emocional e com brilho nos olhos, diante dessa
                loucura que é a vida de uma mulher moderna e bem-resolvida. Isso
                é possível, e você pode fazer parte desse movimento se
                inscrvendo nos cursos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThirdSection;
