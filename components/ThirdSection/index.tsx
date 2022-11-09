import Image from "next/image";
import React from "react";

function ThirdSection() {
  return (
    <div className="bg-final mt-24">
      <div className="container mx-auto h-full">
        <div className="lg:w-10/12 w-11/12 lg:flex h-full lg:mx-0 mx-auto">
          <div className="w-8/12 relative lg:flex hidden justify-center ">
            <Image
              className="absolute -top-[90px]"
              width={504.07}
              height={504.07}
              src="/catia-final.png"
              alt=""
            />
          </div>
          <div className="lg:w-4/12 w-full h-full flex flex-col justify-center lg:pt-0 pt-16">
            <div className="lg:w-[466px]">
              <h1 className="lg:text-[39px] text-[28px] font-bwbeto lg:leading-[48.56px] leading-[34.86px] lg:text-left text-center font-bold">
                “Minha missão é despertar na mulher o que ela tem de melhor”
              </h1>
            </div>
            <div className="2xl:w-[608px] lg:w-[500px] mt-[22px]">
              <p className="lg:text-[22px] text-[14px] lg:leading-[28.93px] leading-[18.41px] lg:text-left text-center font-medium">
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
              <p className="lg:text-[22px] text-[14px] lg:leading-[28.93px] leading-[18.41px] lg:text-left text-center font-medium">
                Cátia ajuda as mulheres a se sentirem mais seguras, confiantes e
                bem-resolvidas nas suas relações amorosas e íntimas, com
                independência emocional e com brilho nos olhos, diante dessa
                loucura que é a vida de uma mulher moderna e bem-resolvida. Isso
                é possível, e você pode fazer parte desse movimento se
                inscrvendo nos cursos.
              </p>
            </div>
          </div>
          <div>
            <div className="w-full relative lg:hidden flex justify-center mt-10">
              <Image
                width={469.65}
                height={576.22}
                src="/catia-final.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThirdSection;
