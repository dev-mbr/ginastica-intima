import Image from "next/image";

export default function FirstSection() {
  return (
    <div className="w-full">
      <div className="bg-home flex items-end">
        <div className="container mx-auto">
          <div className="2xl:w-11/12 lg:w-full ml-auto flex">
            <div className="w-6/12 flex items-center">
              <div>
                <div className="w-[622px]">
                  <h1 className="text-[39.27px]  leading-[47.87px] font-light">
                    Descubra como se tornar{" "}
                    <span className="font-bold">
                      mais confiante, solta e ter relações muito mais prazerosas
                    </span>
                  </h1>
                </div>
                <div className=" mt-[36px] ">
                  <p className="text-[22px]">
                    Aprenda alguns exercícios que podem:
                  </p>
                </div>
                <div className="mt-[36px]  text-[22px] flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <Image src="/circle.svg" alt="" width={"5"} height={"5"} />
                    <p> Reduzir suas cólicas mentruais</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Image src="/circle.svg" alt="" width={"5"} height={"5"} />
                    <p> Prevenir a flacidez vaginal</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Image src="/circle.svg" alt="" width={"5"} height={"5"} />
                    <p> Aumentar sua libido/lubrificação</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Image src="/circle.svg" alt="" width={"5"} height={"5"} />
                    <p>Facilitar o orgasmo</p>
                  </div>
                </div>
                <div className="mt-[40px]">
                  <p className="text-[20.17px] ">
                    Clique no botão abaixo para começar os treinos
                  </p>
                  <a href="">
                    <button className="w-[491px] h-[96px] bg-[#03C322] mt-1 rounded-[20px] text-[26.98px] font-bold">
                      Quero assistir o vídeo
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className="w-6/12 flex items-start">
              <div>
                <Image
                  src={"/catia-home.png"}
                  alt="catia"
                  width="470"
                  height="766"
                />
              </div>

              <div className="mt-[98px] -ml-5">
                <Image src="/logo.svg" alt="catia" width="207" height="82" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
