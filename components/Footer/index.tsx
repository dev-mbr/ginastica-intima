import Image from "next/image";
import React from "react";

function Footer() {
  return (
    <div className="relative ">
      <div className="bg-footer">
        <div className="container mx-auto">
          <div className="2xl:w-10/12 lg:w-full flex justify-between items-center mx-auto">
            <div className="w-[444px] mt-16">
              <p>
                suporte@mulheresbemresolvidas.com.br CNPJ:
                23.705.563.0001/80SHTN Bloco D RUV, SHCS CLS 216 - Asa Sul,
                Brasília
              </p>
            </div>
            <div className="mt-16">
              <Image
                src={"/logo.svg"}
                alt="logo"
                width={159.88}
                height={63.4}
              />
            </div>
            <div className="w-[330px] mt-16">
              <p>
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
