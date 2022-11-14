import Image from "next/image";
import React from "react";

function Footer() {
  return (
    <div className="relative">
      <div className="bg-footer">
        <div className="container mx-auto">
          <div className="2xl:w-10/12 lg:w-full flex lg:flex-row flex-col lg:justify-between justify-start items-center mx-auto">
            <div className="lg:w-[444px] w-[208px] mt-16">
              <p className="lg:text-[16px] text-[10px] text-center">
                suporte@mulheresbemresolvidas.com.br CNPJ:
                23.705.563.0001/80SHTN Bloco D RUV, SHCS CLS 216 - Asa Sul,
                Brasília
              </p>
            </div>
            <div className="mt-16 lg:flex hidden">
              <Image
                src={"https://lp.toquefeminino.com.br/pp-new/ginastica-intima-pompoarismo-b/logo.svg"}
                alt="logo"
                width={159.88}
                height={63.4}
              />
            </div>
            <div className="lg:hidden flex mt-7">
              <Image src={"https://lp.toquefeminino.com.br/pp-new/ginastica-intima-pompoarismo-b/logo.svg"} alt="logo" width={123.57} height={49} />
            </div>
            <div className="lg:w-[330px] w-[172px] lg:mt-16 mt-7 lg:pb-0 pb-5">
              <p className="lg:text-[16px] text-[10px] lg:text-left text-center">
                Política de privacidade | Termos de uso © 2022 Todos os direitos
                reservados
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
