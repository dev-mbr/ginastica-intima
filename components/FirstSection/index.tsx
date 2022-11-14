import Image from "next/image";

export default function FirstSection() {
  return (
    <div className="w-full">
      <div className="bg-home flex lg:items-end lg:pt-0 pt-16">
        <div className="container mx-auto">
          <div className="2xl:w-11/12 lg:w-full w-11/12 lg:ml-auto mx-auto flex">
            <div className="lg:w-6/12 w-full flex items-center">
              <div>
                <div className="flex lg:hidden justify-center">
                  <Image src="https://lp.toquefeminino.com.br/pp-new/ginastica-intima-pompoarismo-b/logo.svg" alt="catia" width="138" height="55" />
                </div>
                <div className="lg:w-[622px] w-full lg:mt-0 mt-7">
                  <h1 className="lg:text-[39.27px] text-[20px] lg:leading-[47.87px] leading-[24.38px] font-light lg:text-start text-center">
                    Descubra como se tornar{" "}
                    <span className="font-bold">
                      mais confiante, solta e ter relações muito mais prazerosas
                    </span>
                  </h1>
                </div>
                <div className=" mt-[36px] ">
                  <p className="lg:text-[22px] text-[14px] lg:text-start text-center">
                    Aprenda alguns exercícios que podem:
                  </p>
                </div>
                <div className="lg:mt-[36px] mt-[18px] lg:text-[22px] text-[14px] flex flex-col gap-3">
                  <div className="flex items-center lg:justify-start justify-center lg:gap-3 gap-1">
                    <Image
                      className="lg:block hidden"
                      src="https://lp.toquefeminino.com.br/pp-new/ginastica-intima-pompoarismo-b/circle.svg"
                      alt=""
                      width={"5"}
                      height={"5"}
                    />
                    <Image
                      className="lg:hidden block"
                      src="https://lp.toquefeminino.com.br/pp-new/ginastica-intima-pompoarismo-b/circle-mob.svg"
                      alt=""
                      width={"11"}
                      height={"11"}
                    />
                    <p> Reduzir suas cólicas mentruais</p>
                  </div>
                  <div className="flex items-center lg:justify-start justify-center lg:gap-3 gap-1">
                    <Image
                      className="lg:block hidden"
                      src="https://lp.toquefeminino.com.br/pp-new/ginastica-intima-pompoarismo-b/circle.svg"
                      alt=""
                      width={"5"}
                      height={"5"}
                    />
                    <Image
                      className="lg:hidden block"
                      src="https://lp.toquefeminino.com.br/pp-new/ginastica-intima-pompoarismo-b/circle-mob.svg"
                      alt=""
                      width={"11"}
                      height={"11"}
                    />
                    <p> Prevenir a flacidez vaginal</p>
                  </div>
                  <div className="flex items-center lg:justify-start justify-center lg:gap-3 gap-1">
                    <Image
                      className="lg:block hidden"
                      src="https://lp.toquefeminino.com.br/pp-new/ginastica-intima-pompoarismo-b/circle.svg"
                      alt=""
                      width={"5"}
                      height={"5"}
                    />
                    <Image
                      className="lg:hidden block"
                      src="https://lp.toquefeminino.com.br/pp-new/ginastica-intima-pompoarismo-b/circle-mob.svg"
                      alt=""
                      width={"11"}
                      height={"11"}
                    />
                    <p> Aumentar sua libido/lubrificação</p>
                  </div>
                  <div className="flex items-center lg:justify-start justify-center lg:gap-3 gap-1">
                    <Image
                      className="lg:block hidden"
                      src="https://lp.toquefeminino.com.br/pp-new/ginastica-intima-pompoarismo-b/circle.svg"
                      alt=""
                      width={"5"}
                      height={"5"}
                    />
                    <Image
                      className="lg:hidden block"
                      src="https://lp.toquefeminino.com.br/pp-new/ginastica-intima-pompoarismo-b/circle-mob.svg"
                      alt=""
                      width={"11"}
                      height={"11"}
                    />
                    <p>Facilitar o orgasmo</p>
                  </div>
                </div>
                <div className="mt-[40px] lg:block flex flex-col items-center">
                  <p className="lg:text-[20.17px] text-[14px] lg:text-start text-center">
                    Clique no botão abaixo para começar os treinos
                  </p>
                  <a href="">
                    <button className="lg:w-[491px] w-[295px] lg:h-[96px] h-[57.68px] bg-[#03C322] lg:mt-1 mt-2 rounded-[20px] lg:text-[26.98px] font-bold">
                      Quero assistir o vídeo
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className="w-6/12 lg:flex hidden items-start">
              <div>
                <Image
                  src={"https://lp.toquefeminino.com.br/pp-new/ginastica-intima-pompoarismo-b/catia-home.png"}
                  alt="catia"
                  width="470"
                  height="766"
                />
              </div>

              <div className="mt-[98px] -ml-5">
                <Image src="https://lp.toquefeminino.com.br/pp-new/ginastica-intima-pompoarismo-b/logo.svg" alt="catia" width="207" height="82" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
